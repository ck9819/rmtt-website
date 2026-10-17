import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Check, FileText } from 'lucide-react';
import styles from './Products.module.css';
import { categories } from './productsData';

export default function Products() {
  const { hash } = useLocation();

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
  }, [hash]);

  return (
    <main className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">What we manufacture</div>
          <h1 className={styles.pageTitle}>Product range</h1>
          <p className={styles.pageSubtitle}>
            Three tool technologies — Solid Carbide, PCD and Brazed Carbide — all manufactured to the same exacting standards on German equipment in Bengaluru.
          </p>
          <div className={styles.jumpLinks}>
            {categories.map(c => (
              <Link key={c.id} to={`/products/${c.id}`} className={styles.jumpLink}>
                <c.icon size={14} />
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.catSection}>
          <div className="container">
            <div className={styles.catHeader}>
              <div className={styles.catHeaderText}>
                <div className="section-eyebrow">{cat.label}</div>
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
                <div style={{ marginTop: 22 }}>
                  <Link to={`/products/${cat.id}`} className={styles.catCta}>
                    Explore {cat.label} <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
              <div className={styles.catImg}>
                <img src={cat.image} alt={cat.headline} />
              </div>
            </div>

            <div className={styles.catFooter}>
              <Link to="/contact" className={styles.catCta}>
                <FileText size={15} />
                Request quote for {cat.label}
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      ))}

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
