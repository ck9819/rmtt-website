import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../pages/productsData';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const pages: Record<string, [string, string]> = {
  '/': ['Precision cutting tools', 'Riddhi Machine Tool Technology manufactures solid carbide, PCD and brazed carbide cutting tools in Bengaluru.'],
  '/products': ['Product range', 'Explore solid carbide, PCD and brazed carbide tools. Search applications and select tools for a quote.'],
  '/about': ['About Riddhi', 'Discover Riddhi Machine Tool Technology, our journey and manufacturing equipment.'],
  '/applications': ['Applications', 'Explore cutting tool applications for automotive, aerospace and precision machining.'],
  '/services': ['Technology and services', 'Explore our tool manufacturing, inspection and coating equipment.'],
  '/downloads': ['Downloads', 'Download the Riddhi Machine Tool Technology product catalogue.'],
  '/contact': ['Request a quote', 'Share your selected tools and machining requirements with Riddhi Machine Tool Technology.'],
  '/privacy': ['Privacy Policy', 'Riddhi Machine Tool Technology privacy policy — client legal copy pending.'],
  '/terms': ['Terms', 'Riddhi Machine Tool Technology terms — client legal copy pending.'],
};
export default function RouteMeta() {
  const { pathname } = useLocation();
  const id = /^\/products\/[^/]+\/?$/.test(pathname) ? pathname.split('/')[2] : undefined;
  const product = products.find(tool => tool.slug === id);
  const category = categories.find(cat => cat.id === id);
  const [title, description] = product ? [product.name, product.description] : category ? [category.label, category.intro] : pages[pathname] || ['Page not found', 'Explore Riddhi Machine Tool Technology cutting tools.'];
  useDocumentMeta(title, description);
  return null;
}