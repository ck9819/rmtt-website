import { useState } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { formatNewsDate, newsImageUrl } from '../data/news';
import type { NewsItem } from '../data/news';
import PhotoPlaceholder from './PhotoPlaceholder';
import styles from './NewsCard.module.css';

export default function NewsCard({ item, headingLevel = 2 }: { item: NewsItem; headingLevel?: 2 | 3 | 4 | 5 | 6 }) {
  const [failedImage, setFailedImage] = useState<string>();
  const src = newsImageUrl(item.image);
  const date = formatNewsDate(item.date);
  const Heading = `h${headingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {src && failedImage !== src ? <img src={src} alt={item.imageAlt || ''} width={960} height={1280} loading="lazy" onError={() => setFailedImage(src)} /> : <PhotoPlaceholder icon={Newspaper} />}
      </div>
      <div className={styles.body}>
        {date && <time dateTime={item.date} className={styles.date}>{date}</time>}
        <Heading className={styles.title}>{item.title}</Heading>
        <p className={styles.summary}>{item.summary}</p>
        {item.linkedinUrl && <a className={styles.link} href={item.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${item.title}: View on LinkedIn — opens LinkedIn in a new tab`}>View on LinkedIn <ExternalLink size={16} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}