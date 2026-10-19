import NewsCard from '../components/NewsCard';
import { getLatestNews, news } from '../data/news';
import styles from './News.module.css';

export default function News() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className="container"><h1 className={styles.title}>News</h1></div>
      </section>
      <section className={styles.section}>
        <div className="container">
          {news.length > 0 ? <div className={styles.grid}>{getLatestNews(news.length).map(item => <NewsCard key={item.id} item={item} />)}</div> : <p className={styles.empty}>News will be published shortly.</p>}
        </div>
      </section>
    </div>
  );
}