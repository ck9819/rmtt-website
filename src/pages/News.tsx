import { useState } from 'react';
import NewsCard from '../components/NewsCard';
import { publishedNews } from '../data/news';
import productStyles from './Products.module.css';
import styles from './News.module.css';

export default function News() {
  const categories = [...new Set(publishedNews.map(item => item.category))];
  const [active, setActive] = useState<string>('All');
  const items = active === 'All' ? publishedNews : publishedNews.filter(item => item.category === active);
  return (
    <div className={productStyles.main}>
      <section className={productStyles.pageHero}>
        <div className="container"><h1 className={productStyles.pageTitle}>News &amp; Articles</h1></div>
      </section>
      <section className={styles.section}>
        <div className="container">
          {publishedNews.length > 0 ? <>
            <div className={`${productStyles.chipRow} ${styles.chips}`} role="group" aria-label="Filter by category">
              {['All', ...categories].map(cat => (
                <button key={cat} type="button" className={productStyles.filterChip} aria-pressed={active === cat} onClick={() => setActive(cat)}>{cat}</button>
              ))}
            </div>
            <div className={styles.grid}>{items.map(item => <NewsCard key={item.id} item={item} />)}</div>
          </> : <p className={styles.empty}>News will be published shortly.</p>}
        </div>
      </section>
    </div>
  );
}
