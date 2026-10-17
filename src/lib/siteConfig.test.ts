import { describe, expect, test } from 'bun:test';
import { siteConfig } from './siteConfig';

describe('shared company contact details', () => {
  test('uses the requested company email', () => {
    expect(siteConfig.email).toBe('sales@rmtt.co.in');
  });
});