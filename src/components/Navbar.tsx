import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';
import { useQuote } from '../context/QuoteContext';
import { siteConfig } from '../lib/siteConfig';

const productOptions = [
  { label: 'Solid Carbide', href: '/products/solid-carbide' },
  { label: 'PCD', href: '/products/pcd' },
  { label: 'Brazed Carbide', href: '/products/brazed' },
];

const navLinks: Array<{ label: string; href: string; dropdown?: typeof productOptions }> = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', dropdown: productOptions },
  { label: 'Applications', href: '/applications' },
  { label: 'Services', href: '/services' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { selected } = useQuote();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location]);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <a href={siteConfig.phoneHref} className={styles.topBarLink}>
            <Phone size={13} /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.topBarLink}>
            <Mail size={13} /> {siteConfig.email}
          </a>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="Riddhi Machine Tool Technology home">
            <img src={`${import.meta.env.BASE_URL}1.png`} alt="Riddhi Machine Tool Technology" className={styles.logoImg} />
          </Link>
          
          

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map(link =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className={styles.navItem}
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    to={link.href}
                    className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                    aria-haspopup="true"
                    aria-expanded={productsOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} style={{ marginLeft: 4, verticalAlign: 'middle' }} />
                  </Link>
                  {productsOpen && (
                    <div className={styles.dropdown} onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
                      {link.dropdown.map(opt => (
                        <Link key={opt.href} to={opt.href} className={styles.dropdownItem}>
                          {opt.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.cta}>
              Request Quote <span className={styles.quoteCount} aria-label={`${selected.length} selected tools`}>{selected.length}</span>
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            {navLinks.map(link => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className={styles.mobileSubMenu}>
                    {link.dropdown.map(opt => (
                      <Link key={opt.href} to={opt.href} className={styles.mobileSubLink}>
                        {opt.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className={styles.mobileCta}>
              Request a Quote ({selected.length})
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
