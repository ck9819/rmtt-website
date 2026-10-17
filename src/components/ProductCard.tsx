import { Link } from 'react-router-dom';
import { Plus, Check, ArrowRight, Settings } from 'lucide-react';
import type { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import PhotoPlaceholder from './PhotoPlaceholder';
import styles from '../pages/Products.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const { selected, add } = useQuote();
  const added = selected.some(tool => tool.slug === product.slug);
  return <article className={styles.productCard}>
    <Link to={`/products/${product.slug}`} className={styles.productImgWrap} aria-label={`View ${product.name}`}>
      {product.image ? <img src={product.image} alt={product.name} loading="lazy" /> : <PhotoPlaceholder icon={Settings} />}
    </Link>
    <div className={styles.productBody}>
      <h3 className={styles.productName}><Link to={`/products/${product.slug}`}>{product.name}</Link></h3>
      <p className={styles.productDesc}>{product.description}</p>
      <div className={styles.cardActions}>
        <Link to={`/products/${product.slug}`} className={styles.detailLink}>Tool details <ArrowRight size={14} /></Link>
        <button type="button" className={styles.quoteButton} onClick={() => add(product.slug)} disabled={added} aria-label={`${added ? 'Added to quote' : 'Add to quote'}: ${product.name}`}>
          {added ? <Check size={14} /> : <Plus size={14} />}{added ? 'Added' : 'Add to quote'}
        </button>
      </div>
    </div>
  </article>;
}