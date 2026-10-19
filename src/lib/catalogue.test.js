import { describe, expect, test } from 'bun:test';
import { products } from '../data/products';
import { filterProducts, readQuoteSlugs, saveQuoteSlugs } from './catalogue';
import { MAX_DRAWING_BYTES, rfqSchema, submitRfq, validateDrawing } from './rfq';

describe('static catalogue rules', () => {
  test('filters the shared cat and q URL parameters', () => {
    const result = filterProducts(new URLSearchParams('cat=pcd&q=reamer'));
    expect(result.map(tool => tool.slug)).toEqual(['pcd-reamer']);
  });
  test('combines material and industry filters', () => {
    const result = filterProducts(new URLSearchParams('cat=solid-carbide&material=titanium&industry=Automotive'));
    expect(result.map(tool => tool.slug)).toEqual(['solid-carbide-reamers']);
  });
  test('unknown end-mill specifications stay absent', () => {
    expect(products.find(tool => tool.slug === 'finishing-application-solid-carbide-endmill')?.specs).toBeUndefined();
  });
  test('restores persisted selections without duplicates or unknown tools', () => {
    let saved = '';
    saveQuoteSlugs({ setItem: (_key, value) => { saved = value; } }, ['pcd-reamer', 'pcd-reamer', 'unknown']);
    expect(readQuoteSlugs({ getItem: () => saved })).toEqual(['pcd-reamer']);
  });
  test('disabled storage cannot break a quote draft', () => {
    expect(readQuoteSlugs({ getItem: () => { throw new Error('disabled'); } })).toEqual([]);
    expect(() => saveQuoteSlugs({ setItem: () => { throw new Error('disabled'); } }, [])).not.toThrow();
  });
});

const form = { name: ' Person ', company: ' Company ', email: 'person@example.com', phone: '', toolType: 'PCD Reamer', industry: '', material: '', machine: '', qty: '', description: ' Bore finishing ', website: '', consent: true };
describe('client-side quote validation', () => {
  test('explicit consent is required before an enquiry can be submitted', () => {
    expect(rfqSchema.safeParse({ ...form, consent: false }).success).toBe(false);
    expect(rfqSchema.safeParse({ ...form, consent: undefined }).success).toBe(false);
    expect(rfqSchema.safeParse(form).success).toBe(true);
  });
  test('10 MB is accepted and anything larger is rejected', () => {
    expect(MAX_DRAWING_BYTES).toBe(10 * 1024 * 1024);
    expect(validateDrawing({ name: 'drawing.pdf', type: 'application/pdf', size: MAX_DRAWING_BYTES })).toBeUndefined();
    expect(validateDrawing({ name: 'drawing.pdf', type: 'application/pdf', size: MAX_DRAWING_BYTES + 1 })).toBeDefined();
  });
  test('only PDF, DXF and DWG drawings are accepted', () => {
    for (const extension of ['pdf', 'dxf', 'dwg']) expect(validateDrawing({ name: `drawing.${extension}`, type: '', size: 100 })).toBeUndefined();
    expect(validateDrawing({ name: 'drawing.exe', type: '', size: 100 })).toBeDefined();
    expect(validateDrawing({ name: 'drawing.pdf', type: 'image/png', size: 100 })).toBeDefined();
  });
  test('trims field values and rejects whitespace-only requirements', () => {
    expect(rfqSchema.parse(form).name).toBe('Person');
    expect(rfqSchema.safeParse({ ...form, description: '  ' }).success).toBe(false);
  });
  test('filled honeypot is rejected', () => {
    expect(rfqSchema.safeParse({ ...form, website: 'spam' }).success).toBe(false);
  });
  test('all form fields enforce length limits', () => {
    expect(rfqSchema.safeParse({ ...form, name: 'x'.repeat(101) }).success).toBe(false);
    expect(rfqSchema.safeParse({ ...form, description: 'x'.repeat(2001) }).success).toBe(false);
  });
  test('submission never reports success while disconnected', async () => {
    await expect(submitRfq({ ...form, tools: ['pcd-reamer'] })).rejects.toThrow('not connected');
  });
});