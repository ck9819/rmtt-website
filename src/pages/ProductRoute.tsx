import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from './productsData';
import CategoryPage from './CategoryPage';
import ProductDetail from './ProductDetail';
import styles from './Products.module.css';

export default function ProductRoute() {
  const { categoryId } = useParams();
  const product = products.find(tool => tool.slug === categoryId);
  if (product) return <ProductDetail product={product} />;
  if (categories.some(cat => cat.id === categoryId)) return <CategoryPage />;
  return <main className={styles.main}><section className={styles.pageHero}><div className="container"><h1 className={styles.pageTitle}>Tool not found</h1><Link to="/products" className={styles.catCta}>View product range</Link></div></section></main>;
}