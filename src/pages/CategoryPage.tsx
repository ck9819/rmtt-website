import { useEffect } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, Check, FileText } from 'lucide-react';
import styles from './Products.module.css';
import { categories, type Category } from './productsData';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { hash } = useLocation();
  const cat: Category | undefined = categories.find(c => c.id === categoryId);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash, categoryId]);

  if (!cat) return <Navigate to="/products" replace />;

  return (
    <main className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">{cat.label}</div>
          <h1 className={styles.pageTitle}>{cat.headline}</h1>
          <p className={styles.pageSubtitle}>{cat.intro}</p>
          <div className={styles.jumpLinks}>
            {categories.map(c => (
              <Link
                key={c.id}
                to={`/products/${c.id}`}
                className={styles.jumpLink}
                style={c.id === cat.id ? { background: 'rgba(0,40,85,0.08)' } : undefined}
              >
                <c.icon size={14} />
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id={cat.id} className={styles.catSection}>
        <div className="container">
          <div className={styles.catHeader}>
            <div className={styles.catHeaderText}>
              <div className="section-eyebrow">Capabilities</div>
              <h2 className={styles.catTitle}>{cat.headline}</h2>
              <p className={styles.catIntro}>{cat.intro}</p>
              <ul className={styles.features}>
                {cat.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <Check size={14} style={{ color: cat.color, flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.catImg}>
              <img src={cat.image} alt={cat.headline} />
            </div>
          </div>

          {cat.subcategories.map(sub => (
            <div key={sub.id} id={sub.id} className={styles.subCat}>
              <div className={styles.subCatHead}>
                <h3 className={styles.subCatTitle}>{sub.title}</h3>
                <p className={styles.subCatBlurb}>{sub.blurb}</p>
              </div>
              <div className={styles.productCards}>
                {sub.products.map(p => (
                  <article key={p.name} className={styles.productCard}>
                    {p.image && (
                      <div className={styles.productImgWrap}>
                        <img src={p.image} alt={p.name} loading="lazy" />
                      </div>
                    )}
                    <div className={styles.productBody}>
                      <h4 className={styles.productName}>{p.name}</h4>
                      <p className={styles.productDesc}>{p.desc}</p>
                      {p.specs && (
                        <dl className={styles.specGrid}>
                          {p.specs.map(s => (
                            <div key={s.label} className={styles.specItem}>
                              <dt>{s.label}</dt>
                              <dd>{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      {p.application && (
                        <div className={styles.appLine}>
                          <span className={styles.appLabel}>Typical use</span>
                          <span>{p.application}</span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.catFooter}>
            <Link to="/contact" className={styles.catCta}>
              <FileText size={15} />
              Request quote for {cat.label}
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Don't see what you need?</h2>
          <p className={styles.ctaSub}>
            We regularly manufacture custom and special tools to customer specifications. Share your drawing or describe your challenge.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Describe your requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
