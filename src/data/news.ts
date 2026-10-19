export type NewsItem = {
  id: string;
  date: string; // YYYY-MM-DD; leave empty until the post date is confirmed.
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  linkedinUrl: string;
};

// TODO: Add real posts supplied by the client (text, image, LinkedIn URL).
export const news: NewsItem[] = [
  {
    id: 'vollmer-edm-welcome',
    date: '2026-08-31',
    title: 'Welcoming our new VOLLMER EDM machine',
    summary: 'We are happy to welcome our new VOLLMER EDM Machine to the Riddhi family. This addition strengthens our capabilities in precision manufacturing, advanced technology, and delivering the quality our customers expect from us.',
    image: '/images/news/vollmer-edm.webp',
    imageAlt: 'The new VOLLMER EDM machine at the Riddhi facility',
    linkedinUrl: 'https://www.linkedin.com/posts/ravi-kumar-k-86794417_riddhimachinetooltechnology-vollmer-edm-activity-7500101192245575681-_i5s',
  },
];

export function getLatestNews(n: number, items: readonly NewsItem[] = news): NewsItem[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date)).slice(0, Math.max(0, Math.floor(n)));
}

export function formatNewsDate(date: string): string | undefined {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return undefined;
  const value = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(value.getTime()) || value.toISOString().slice(0, 10) !== date) return undefined;
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(value);
}

export function newsImageUrl(image?: string): string | undefined {
  // Only local, root-relative news images; never external URLs or directory traversal.
  return image && /^\/images\/news\/[a-zA-Z0-9_-]+\.(?:webp|png|jpe?g|avif)$/.test(image)
    ? `${import.meta.env.BASE_URL}${image.slice(1)}` : undefined;
}