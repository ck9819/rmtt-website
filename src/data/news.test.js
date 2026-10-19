import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { news, publishedNews, getLatestNews, getNewsById } from './news';
import { formatNewsDate, newsImageUrl } from '../lib/news';
import { siteConfig } from '../lib/siteConfig';

test('seven articles are published and the held VOLLMER item is hidden', () => {
  expect(publishedNews.length).toBe(7);
  expect(publishedNews.some(item => item.id === 'vollmer-edm-welcome')).toBe(false);
  expect(getNewsById('vollmer-edm-welcome')).toBeUndefined();
  expect(news.find(item => item.id === 'vollmer-edm-welcome')?.published).toBe(false);
});
test('latest news returns the three newest published items', () => {
  expect(getLatestNews(3).map(item => item.date)).toEqual(['2026-10-10', '2026-09-22', '2026-08-28']);
});
test('dates format like "10 Oct 2026"', () => {
  expect(formatNewsDate('2026-10-10')).toBe('10 Oct 2026');
  expect(formatNewsDate('2026-09-22')).toBe('22 Sep 2026');
  expect(formatNewsDate('2026-02-30')).toBeUndefined();
});
test('only local news images resolve', () => {
  expect(newsImageUrl('/images/news/pcd-reamers.webp')).toBe('/images/news/pcd-reamers.webp');
  for (const path of ['https://example.com/a.webp', '/images/news/../a.webp', '/images/a.webp', undefined]) expect(newsImageUrl(path)).toBeUndefined();
});
test('sitemap lists every published article and not the held one, on the site domain', () => {
  const xml = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
  for (const item of publishedNews) expect(xml).toContain(`${siteConfig.siteUrl}/#/news/${item.id}`);
  expect(xml).toContain(`${siteConfig.siteUrl}/#/news</loc>`);
  expect(xml).not.toContain('vollmer-edm-welcome');
  expect(xml).not.toContain('example.com');
});
