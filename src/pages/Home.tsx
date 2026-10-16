import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Settings, Gem, Layers, Wrench, Car, Plane, Zap, Droplets, Cpu, CircleCheck as CheckCircle2, Award, Clock, Target, Download, FileText } from 'lucide-react';
import styles from './Home.module.css';
import { useReveal} from '../hooks/useReveal';
import ProductShowcase from './ProductShowcase';
import StatsBar from '../components/StatsBar';
import solidCarbideEndmills from '../assets/solid-carbide-endmills.jpg.asset.json';
import pcdToolingTechnology from '../assets/pcd-tooling-technology.jpg.asset.json';
import brazedTool1 from '../assets/brazed-tool-1.png.asset.json';


const products = [
  {
    id: 'solid-carbide',
    icon: Settings,
    category: 'Solid Carbide',
    name: 'End Mills & Drills',
    description:
      'High-polish flutes, internal coolant channels and advanced PVD coatings for steel, titanium and aluminium. Fully ground on 5-axis SAACKE machines.',
    tags: ['Step drills', 'Ball nose', 'Tapered', 'Thread mills'],
    color: '#4A7BA7',
    bg: '#EBF2F9',
    image: solidCarbideEndmills.url,
  },
  {
    id: 'pcd',
    icon: Gem,
    category: 'PCD Tools',
    name: 'PCD Reamers & Millers',
    description:
      'Wire EDM + lapping edges, seamless brazing, steel & carbide body options. Ideal for aluminium die casting and non-ferrous applications.',
    tags: ['Multi-step reamers', 'Face mills', 'Valve seat tools', 'Injector reamers'],
    color: '#1A8A5C',
    bg: '#E8F5EE',
    image: pcdToolingTechnology.url,
  },
  {
    id: 'brazed',
    icon: Layers,
    category: 'Brazed Carbide',
    name: 'Special Brazed Tools',
    description:
      'Cost-effective carbide solutions with 5-axis ground edges. T-slot cutters, shell mills, step reamers and custom profiles.',
    tags: ['T-slot cutters', 'Shell mills', 'Step reamers', 'Custom'],
    color: '#B07A1A',
    bg: '#FBF4E6',
    image: brazedTool1.url,
  },
];

const industries = [
  { icon: Car, label: 'Automotive', count: '12+ case studies' },
  { icon: Zap, label: 'Two-wheeler', count: '8+ case studies' },
  { icon: Droplets, label: 'Hydraulics', count: '5+ case studies' },
  { icon: Plane, label: 'Aerospace', count: '6+ case studies' },
  { icon: Cpu, label: 'Precision Engg.', count: '10+ case studies' },
  { icon: Wrench, label: 'General Engg.', count: '15+ case studies' },
];

const applications = [
  {
    title: 'Cylinder Head Valve Seat & Guide',
    industry: 'Automotive',
    material: 'Grey cast iron',
    tool: 'Steel body + PCD tipped multi-step reamer',
    result: 'Improved profile accuracy, better finish consistency',
    img: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Two-Wheeler Shock Absorber Bore',
    industry: 'Two-wheeler',
    material: 'Aluminium die casting',
    tool: 'PCD 5-step reamer (Module 70, Z-4 tips)',
    result: '5 operations in 1 tool, Vc=210 m/min, Ra 0.4 finish',
    img: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Hydraulic Manifold Spool Bore Grooving',
    industry: 'Hydraulics',
    material: 'Grey cast iron',
    tool: 'Special multi-grooving brazed carbide tool',
    result: 'Up to 70% cycle time reduction, ±0.005mm tolerance',
    img: 'https://images.pexels.com/photos/162568/oil-pump-jack-donkey-pump-164682.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const machines = [
  { num: '01', name: 'SAACKE 5-axis CNC Grinding', detail: 'Sub-micron tolerance on all rotary tool geometries' },
  { num: '02', name: 'VOLLMER Wire EDM', detail: 'PCD & CBN edge machining with precision lapping finish' },
  { num: '03', name: 'Walter Helicheck', detail: 'Optical non-contact tool measurement & inspection' },
  { num: '04', name: 'Swiss Cylindrical Grinding', detail: 'High-precision body & shank grinding systems' },
];

const trustItems = [
  { icon: Award, text: 'German-benchmark equipment' },
  { icon: Target, text: '±0.002mm tolerance capability' },
  { icon: CheckCircle2, text: 'ISO-aligned quality processes' },
  { icon: Clock, text: 'Fast turnaround & technical support' },
];

export default function Home() {
  const [appIndex, setAppIndex] = useState(0);
  const [appPaused, setAppPaused] = useState(false);
  const appCount = applications.length;

  
  const industryReveal = useReveal<HTMLDivElement>();
  const productsHeadReveal = useReveal<HTMLDivElement>();
  const productsGridReveal = useReveal<HTMLDivElement>();
  const techReveal = useReveal<HTMLDivElement>();
  const techRightReveal = useReveal<HTMLDivElement>();
  const appsHeadReveal = useReveal<HTMLDivElement>();
  const appsBodyReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (appPaused) return;
    const id = setInterval(() => setAppIndex(i => (i + 1) % appCount), 4500);
    return () => clearInterval(id);
  }, [appPaused, appCount]);

  const goPrev = () => setAppIndex(i => (i - 1 + appCount) % appCount);
  const goNext = () => setAppIndex(i => (i + 1) % appCount);

  return (
    <main>
      <ProductShowcase />
      
      {/* Industry strip */}
      <section className={styles.industryStrip}>
        <div className={`container ${styles.industryInner}`}>
          <span className={styles.industryLabel}>Industries served</span>
          <div
            ref={industryReveal.ref}
            className={`${styles.industryTags} ${styles.revealStagger} ${industryReveal.shown ? styles.revealStaggerShown : ''}`}
          >
            {industries.map(ind => (
              <div key={ind.label} className={styles.industryTag}>
                <ind.icon size={14} />
                {ind.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Products */}
      <section className={styles.section}>
        <div className="container">
          <div
            ref={productsHeadReveal.ref}
            className={`${styles.sectionHead} ${styles.reveal} ${productsHeadReveal.shown ? styles.revealShown : ''}`}
          >
            <div>
              <div className="section-eyebrow">What we make</div>
              <h2 className={styles.sectionTitle}>Product range</h2>
              <p className={styles.sectionSub}>
                Three tool technologies, one manufacturing standard — all ground on German machinery in Bengaluru.
              </p>
            </div>
            <Link to="/products" className={styles.sectionLink}>
              View all products <ArrowRight size={14} />
            </Link>
          </div>
          <div
            ref={productsGridReveal.ref}
            className={`${styles.prodGrid} ${styles.revealStagger} ${productsGridReveal.shown ? styles.revealStaggerShown : ''}`}
          >
            {products.map(p => (
              <Link to={`/products#${p.id}`} key={p.id} className={styles.prodCard}>
                <div className={styles.prodCardImg}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className={styles.prodCardImgProduct} />
                  ) : (
                    <p.icon size={40} color={p.color} strokeWidth={1.5} />
                  )}
                </div>
                <div className={styles.prodCardBody}>
                  <div className={styles.prodCat} style={{ color: p.color }}>{p.category}</div>
                  <h3 className={styles.prodName}>{p.name}</h3>
                  <p className={styles.prodDesc}>{p.description}</p>
                  <div className={styles.prodTags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.prodTag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.prodLink} style={{ color: p.color }}>
                    Learn more <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology highlight */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techGrid}>
            <div
              ref={techReveal.ref}
              className={`${styles.techLeft} ${styles.reveal} ${techReveal.shown ? styles.revealShown : ''}`}
            >
              <div className="section-eyebrow" style={{ background: 'rgba(74,123,167,0.2)', color: '#447199' }}>
                Our equipment
              </div>
              <h2 className={styles.techTitle}>Manufacturing technology</h2>
              <p className={styles.techSub}>
                German-benchmark machines operated by experienced engineers from our Bengaluru facility. Every tool is inspected with Walter Helicheck optical measurement.
              </p>
              <div className={styles.trustItems}>
                {trustItems.map(t => (
                  <div key={t.text} className={styles.trustItem}>
                    <t.icon size={16} className={styles.trustIcon} />
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/technology" className={styles.techLink}>
                See all technology <ArrowRight size={14} />
              </Link>
            </div>
            <div
              ref={techRightReveal.ref}
              className={`${styles.techRight} ${styles.revealStagger} ${techRightReveal.shown ? styles.revealStaggerShown : ''}`}
            >
              {machines.map(m => (
                <div key={m.num} className={styles.techCard}>
                  <div className={styles.techCardNum}>{m.num}</div>
                  <div className={styles.techCardBody}>
                    <div className={styles.techCardName}>{m.name}</div>
                    <div className={styles.techCardDetail}>{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.appSection}>
        <div className="container">
          <div
            ref={appsHeadReveal.ref}
            className={`${styles.sectionHead} ${styles.reveal} ${appsHeadReveal.shown ? styles.revealShown : ''}`}
          >
            <div>
              <div className="section-eyebrow">Proven results</div>
              <h2 className={styles.sectionTitle}>Application case studies</h2>
              <p className={styles.sectionSub}>Real challenges solved with engineered tooling solutions.</p>
            </div>
            <Link to="/industries" className={styles.sectionLink}>
              All case studies <ArrowRight size={14} />
            </Link>
          </div>
          <div
            ref={appsBodyReveal.ref}
            className={`${styles.appCarousel} ${styles.reveal} ${appsBodyReveal.shown ? styles.revealShown : ''}`}
            onMouseEnter={() => setAppPaused(true)}
            onMouseLeave={() => setAppPaused(false)}
          >
            <div className={styles.appTrackWrap}>
              <div
                className={styles.appTrack}
                style={{ transform: `translateX(-${appIndex * 100}%)` }}
              >
                {applications.map(app => (
                  <div key={app.title} className={styles.appSlide}>
                    <div className={styles.appCard}>
                      <div className={styles.appCardImg}>
                        <img src={app.img} alt={app.title} />
                        <div className={styles.appCardImgOverlay} />
                        <span className={styles.appBadge}>{app.industry}</span>
                      </div>
                      <div className={styles.appCardBody}>
                        <h3 className={styles.appTitle}>{app.title}</h3>
                        <div className={styles.appMeta}>
                          <span><strong>Material:</strong> {app.material}</span>
                          <span><strong>Tool:</strong> {app.tool}</span>
                        </div>
                        <div className={styles.appResult}>
                          <CheckCircle2 size={14} className={styles.appResultIcon} />
                          <span>{app.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous case study"
              className={`${styles.carBtn} ${styles.carBtnPrev}`}
              onClick={goPrev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next case study"
              className={`${styles.carBtn} ${styles.carBtnNext}`}
              onClick={goNext}
            >
              <ChevronRight size={20} />
            </button>
            <div className={styles.carDots}>
              {applications.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to case study ${i + 1}`}
                  className={`${styles.carDot} ${i === appIndex ? styles.carDotActive : ''}`}
                  onClick={() => setAppIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div
            ref={ctaReveal.ref}
            className={`${styles.ctaInner} ${styles.reveal} ${ctaReveal.shown ? styles.revealShown : ''}`}
          >
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Ready to optimise your machining process?</h2>
              <p className={styles.ctaSub}>
                Share your application details and we'll engineer the right tool for your requirements. We respond within 24 hours with a technical proposal.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className={styles.ctaBtnPrimary}>
                <FileText size={16} />
                Request a Quote
              </Link>
              <a
                href="/RMTT_PPT.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnSecondary}
              >
                <Download size={16} />
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
