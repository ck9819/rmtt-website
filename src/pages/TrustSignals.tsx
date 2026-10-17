import { useRef, useState } from 'react';
import { Download, FileText, Award, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import styles from './TrustSignals.module.css';

// ── TYPES ────────────────────────────────────────────────────────────────────
interface Certificate {
  id: string;
  icon: typeof Award;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bg: string;
}

interface CustomerLogo {
  id: string;
  name: string;
  industry: string;
  initial: string;
  color: string;
  bg: string;
}

interface Download {
  id: string;
  title: string;
  description: string;
  fileType: string;
  href: string;
  featured?: boolean;
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const certificates: Certificate[] = [
  {
    id: 'german-benchmark',
    icon: Award,
    title: 'German Quality Benchmark',
    subtitle: 'Manufacturing Standard',
    description:
      'All tools manufactured to German quality benchmarks using SAACKE 5-axis grinding — the same equipment standard used by European precision tool leaders.',
    color: '#4A7BA7',
    bg: '#EBF2F9',
  },
  {
    id: 'iso-aligned',
    icon: ShieldCheck,
    title: 'ISO-Aligned Processes',
    subtitle: 'Quality Management',
    description:
      'Our quality processes are aligned with ISO 9001 principles, covering incoming material inspection, in-process measurement, and final Walter Helicheck optical verification.',
    color: '#1A8A5C',
    bg: '#E8F5EE',
  },
  {
    id: 'make-in-india',
    icon: Star,
    title: 'Make in India',
    subtitle: 'Government Initiative',
    description:
      'Proudly aligned with the Make in India vision — precision cutting tools manufactured domestically to global standards, reducing import dependency for Indian industry.',
    color: '#B07A1A',
    bg: '#FBF4E6',
  },
  {
    id: 'vollmer-saacke',
    icon: Award,
    title: 'SAACKE & VOLLMER Certified',
    subtitle: 'Equipment Standard',
    description:
      'Operating SAACKE 5-axis CNC grinding and VOLLMER Wire EDM — the same machines used by the world\'s leading precision cutting tool manufacturers in Germany.',
    color: '#5B4FA3',
    bg: '#EEEAF9',
  },
];

const customerLogos: CustomerLogo[] = [
  { id: '1', name: 'Automotive OEM', industry: 'Automotive', initial: 'A', color: '#4A7BA7', bg: '#EBF2F9' },
  { id: '2', name: 'Two-Wheeler Major', industry: 'Two-wheeler', initial: 'T', color: '#1A8A5C', bg: '#E8F5EE' },
  { id: '3', name: 'Hydraulics Leader', industry: 'Hydraulics', initial: 'H', color: '#B07A1A', bg: '#FBF4E6' },
  { id: '4', name: 'Aerospace Tier-1', industry: 'Aerospace', initial: 'A', color: '#5B4FA3', bg: '#EEEAF9' },
  { id: '5', name: 'Precision Engineer', industry: 'Precision Engg.', initial: 'P', color: '#2B3A52', bg: '#EEF2F8' },
  { id: '6', name: 'General Industry', industry: 'General Engg.', initial: 'G', color: '#7A3B1A', bg: '#F9EDEA' },
];

// TODO: Add per-category datasheets when real PDFs are available.
const downloads: Download[] = [
  {
    id: 'company-catalogue',
    title: 'Product Catalogue',
    description:
      'Complete product range — solid carbide, PCD and brazed carbide tools with specifications, applications and case studies.',
    fileType: 'PDF',
    href: `${import.meta.env.BASE_URL}rmtt-catalogue.pdf`,
    featured: true,
  },

];

// ── STATS (trust numbers) ─────────────────────────────────────────────────────
const trustStats = [
  { value: '±0.002mm', label: 'Tolerance achieved' },
  { value: '5-axis', label: 'SAACKE grinding' },
  { value: '3+', label: 'Tool technologies' },
  { value: '24h', label: 'Quote response time' },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
export default function TrustSignals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (item: Download) => {
    setDownloading(item.id);
    setTimeout(() => setDownloading(null), 2000);
  };

  const scrollLogos = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>

      {/* ── 1. TRUST STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {trustStats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. QUALITY CERTIFICATES ── */}
      <section className={styles.certSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div className="section-eyebrow">Quality assurance</div>
            <h2 className={styles.sectionTitle}>Standards & certifications</h2>
            <p className={styles.sectionSub}>
              Every tool that leaves our Bengaluru facility meets the same quality benchmarks as the best in Germany.
            </p>
          </div>
          <div className={styles.certGrid}>
            {certificates.map((cert) => (
              <div key={cert.id} className={styles.certCard}>
                <div className={styles.certIconWrap} style={{ background: cert.bg }}>
                  <cert.icon size={22} style={{ color: cert.color }} />
                </div>
                <div className={styles.certSubtitle} style={{ color: cert.color }}>
                  {cert.subtitle}
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CUSTOMER LOGOS STRIP ── */}
      <section className={styles.logosSection}>
        <div className="container">
          <div className={styles.logosHead}>
            <p className={styles.logosLabel}>Trusted by manufacturers across India</p>
          </div>
        </div>
        <div className={styles.logosTrackOuter}>
          <button
            type="button"
            aria-label="Scroll left"
            className={`${styles.scrollBtn} ${styles.scrollBtnLeft}`}
            onClick={() => scrollLogos('left')}
          >
            <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
          </button>
          <div className={styles.logosTrack} ref={scrollRef}>
            {/* duplicate for seamless feel */}
            {[...customerLogos, ...customerLogos].map((logo, i) => (
              <div key={`${logo.id}-${i}`} className={styles.logoCard}>
                <div
                  className={styles.logoInitial}
                  style={{ background: logo.bg, color: logo.color }}
                >
                  {logo.initial}
                </div>
                <div className={styles.logoName}>{logo.name}</div>
                <div className={styles.logoIndustry}>{logo.industry}</div>
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Scroll right"
            className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
            onClick={() => scrollLogos('right')}
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className={styles.logosNote}>
          <p>* Customer names withheld per NDA. Industries and tool types confirmed.</p>
        </div>
      </section>

      {/* ── 4. DOWNLOADABLE CATALOGUE ── */}
      <section className={styles.downloadSection}>
        <div className="container">
          <div className={styles.downloadLayout}>

            {/* Left — heading */}
            <div className={styles.downloadLeft}>
              <div className="section-eyebrow">Downloads</div>
              <h2 className={styles.downloadTitle}>Product Catalogue</h2>
              <p className={styles.downloadSub}>
                Download our complete product catalogue for tool specifications and applications.
              </p>
              {/* Featured download — big CTA */}
              <a
                href={downloads[0].href}
                download="rmtt-catalogue.pdf"
                className={styles.featuredDownload}
                onClick={() => handleDownload(downloads[0])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.featuredDownloadIcon}>
                  <FileText size={28} />
                </div>
                <div className={styles.featuredDownloadBody}>
                  <div className={styles.featuredDownloadTitle}>{downloads[0].title}</div>
                  <div className={styles.featuredDownloadMeta}>
                    {downloads[0].fileType} · Full product range
                  </div>
                </div>
                <div className={styles.featuredDownloadBtn}>
                  {downloading === downloads[0].id ? (
                    <span className={styles.downloadingSpinner} />
                  ) : (
                    <Download size={18} />
                  )}
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>

    </div>
  );
}
