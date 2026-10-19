import { expect, test } from 'bun:test';
import { news, getLatestNews, formatNewsDate, newsImageUrl } from './news';

test('only the client supplied VOLLMER welcome item is published', () => {
  expect(news.map(item => item.id)).toEqual(['vollmer-edm-welcome']);
  expect(news[0].title).toBe('Welcoming our new VOLLMER EDM machine');
  expect(news[0].summary).toBe('We are happy to welcome our new VOLLMER EDM Machine to the Riddhi family. This addition strengthens our capabilities in precision manufacturing, advanced technology, and delivering the quality our customers expect from us.');
});
test('unconfirmed dates are not invented', () => {
  expect(news[0].date).toBe('');
  expect(formatNewsDate(news[0].date)).toBeUndefined();
});
test('latest news returns the three newest without mutating source data', () => {
  const items = ['2026-01-01', '2026-04-01', '2026-02-01', '2026-03-01'].map((date, index) => ({ ...news[0], id: String(index), date }));
  expect(getLatestNews(3, items).map(item => item.date)).toEqual(['2026-04-01', '2026-03-01', '2026-02-01']);
  expect(items[0].date).toBe('2026-01-01');
});
test('empty news yields no latest items', () => {
  expect(getLatestNews(3, [])).toEqual([]);
});
test('news accepts only local images within the news directory', () => {
  expect(newsImageUrl('/images/news/vollmer-edm.webp')).toBe('/images/news/vollmer-edm.webp');
  for (const path of ['https://example.com/photo.webp', '//example.com/photo.webp', '/images/news/../photo.webp', '/images/other.webp', undefined]) expect(newsImageUrl(path)).toBeUndefined();
});
test('valid dates format in UTC and invalid dates stay absent', () => {
  expect(formatNewsDate('2026-01-01')).toBe('1 January 2026');
  expect(formatNewsDate('2026-02-30')).toBeUndefined();
  expect(formatNewsDate('YYYY-MM-DD')).toBeUndefined();
});