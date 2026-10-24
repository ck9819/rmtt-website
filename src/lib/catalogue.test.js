import { describe, expect, test } from 'bun:test';
import { products } from '../data/products';
import { industryNames } from '../data/industries';
import { leaders } from '../data/leadership';
import { equipment } from '../data/equipment';
import { filterProducts, readQuoteSlugs, saveQuoteSlugs } from './catalogue';
import { MAX_DRAWING_BYTES, buildRfqMailto, rfqSchema, submitRfq, validateDrawing } from './rfq';

describe('static catalogue rules', () => {
  test('filters the shared cat and q URL parameters', () => {
    const result = filterProducts(new URLSearchParams('cat=pcd&q=reamer'));
    expect(result.map(tool => tool.slug)).toEqual(['pcd-reamer']);
  });
  test('combines material and industry filters', () => {
    const result = filterProducts(new URLSearchParams('cat=solid-carbide&material=titanium&industry=Automotive'));
    expect(result.map(tool => tool.slug)).toEqual(['solid-carbide-reamers']);
  });
  test('end-mill specifications match the approved FINAL deck values', () => {
    expect(products.find(tool => tool.slug === 'finishing-application-solid-carbide-endmill')?.specs).toEqual([
      { label: 'Diameter', value: '2–32 mm' },
      { label: 'Flutes (Z)', value: '2, 3, 4, 5, 6' },
      { label: 'Technology', value: 'multi-helix with high wear-resistance coatings' },
      { label: 'Features', value: 'high-polished and edge-honed' },
    ]);
  });
  test('reamers include approved coolant and multi-step options', () => {
    const specs = products.find(tool => tool.slug === 'solid-carbide-reamers')?.specs;
    expect(specs).toContainEqual({ label: 'Coolant', value: 'Internal coolant supply' });
    expect(specs).toContainEqual({ label: 'Options', value: 'Special multi-step reamers' });
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
    const payload = { ...form, tools: ['pcd-reamer'] };
    expect(await submitRfq(payload)).toBe('draft');
    expect(buildRfqMailto(payload, 'sales@rmtt.co.in')).toContain('mailto:sales@rmtt.co.in?subject=');
  });
});
describe('approved company data', () => {
  test('industry options contain exactly the six approved sectors', () => {
    expect(industryNames).toEqual(['Automotive', 'Aerospace', 'Defence', 'Energy', 'General Engineering', 'Hydraulic']);
  });
  test('leadership uses approved names without unknown roles or photos', () => {
    expect(leaders).toEqual([
      { name: 'Roshan Tanuk', role: '', img: '' },
      { name: 'K. Ravi Kumar', role: '', img: '' },
      { name: 'K. Syamala Kumar', role: '', img: '' },
    ]);
  });
  test('unconfirmed equipment is excluded', () => {
    expect(equipment.map(item => item.id)).toEqual(['saacke', 'vollmer', 'helicheck', 'coating']);
  });
});

import { getProductImages } from '../data/products';
describe('product images', () => {
  test('prefers images[], falls back to image, else empty', () => {
    expect(getProductImages({ name: 'A', image: 'a.jpg', images: [{ src: 'b.jpg', alt: 'B' }] })).toEqual([{ src: 'b.jpg', alt: 'B' }]);
    expect(getProductImages({ name: 'A', image: 'a.jpg' })).toEqual([{ src: 'a.jpg', alt: 'A' }]);
    expect(getProductImages({ name: 'A' })).toEqual([]);
  });
});
