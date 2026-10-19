import { Link } from 'react-router-dom';
import { Plus, Check, ArrowRight, Settings } from 'lucide-react';
import type { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import PhotoPlaceholder from './PhotoPlaceholder';
import styles from '../pages/Products.module.css';

export default function ProductCard({ product, headingLevel = 3 }: { product: Product; headingLevel?: 2 | 3 | 4 }) {
  const Heading = `h${headingLevel}` as 'h2' | 'h3' | 'h4';
  const { selected, add } = useQuote();
  const added = selected.some(tool => tool.slug === product.slug);
  return <article className={styles.productCard}>
    <Link to={`/products/${product.slug}`} className={styles.productImgWrap} aria-label={`View ${product.name}`}>
      {product.image ? <img src={product.image} alt={product.name} width={800} height={600} loading="lazy" decoding="async" draggable={false} onDragStart={e => e.preventDefault()} onContextMenu={e => e.preventDefault()} className={styles.protectedImg} /> : <PhotoPlaceholder icon={Settings} />}
    </Link>
    <div className={styles.productBody}>
      <Heading className={styles.productName}><Link to={`/products/${product.slug}`}>{product.name}</Link></Heading>
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