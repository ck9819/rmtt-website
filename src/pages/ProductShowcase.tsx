import { useState, useEffect, useCallback, useRef, type JSX } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import styles from './ProductShowcase.module.css';
import factoryCollage from '../assets/factory-hero-collage.jpg.asset.json';
import factoryMachining from '../assets/factory-hero-machining.jpg.asset.json';
import factoryFloor from '../assets/factory-hero-floor.jpg.asset.json';
import factoryInspection from '../assets/factory-hero-inspection.jpg.asset.json';

// ── TYPES ────────────────────────────────────────────────────────────────────
interface Slide {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  subtitle: string;
  tag: string;
  href: string;
}

// ── DATA — factory photography from the company PDF ──────────────────────────
const slides: Slide[] = [
  
  {
    id: 'solid-carbide-drills',
    image: factoryCollage.url,
    imageAlt: 'Riddhi precision tool manufacturing in the factory',
    category: 'Solid Carbide',
    title: 'Step Drills & Solid Carbide Drills',
    subtitle: 'High-polish flute geometry for single-pass multi-diameter drilling. Internal coolant options available for aluminium die casting and steel.',
    tag: 'Aluminium · Steel · Multi-diameter',
    href: '/products#solid-carbide',
  },
  {
    id: 'pcd-hsk-reamer',
    image: factoryMachining.url,
    imageAlt: 'Close-up of precision machining in progress',
    category: 'PCD Tools',
    title: 'PCD Form Grooving Cutters',
    subtitle: 'VOLLMER Wire EDM + lapping edges. Module 70 / HSK connection with Z-4 PCD tips and internal coolant supply. One-shot finish in aluminium.',
    tag: 'Two-wheeler · Aluminium die casting',
    href: '/products#pcd',
  },
  {
    id: 'pcd-module-reamer',
    image: factoryFloor.url,
    imageAlt: 'Precision CNC machines on the factory floor',
    category: 'PCD Tools',
    title: 'PCD Step Three Step Reamer',
    subtitle: '5 steps consolidated in one tool. Vc=210 m/min, feed 0.3 mm/rev on BT30. Module 60 runout compensation for smooth piston movement.',
    tag: 'Precision bore finishing · Module 60/70',
    href: '/products#pcd',
  },
  {
    id: 'pcd-tools',
    image: factoryInspection.url,
    imageAlt: 'Precision tool inspection equipment in the Riddhi facility',
    category: 'PCD Tools',
    title: 'Seameless Brazing',
    subtitle: 'Solid Carbide Steel body + Well balanced PCD aterial High quality pocket seats Perfect smooth flutes.',
    tag: 'Automotive · Grey cast iron',
    href: '/products#pcd',
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────
export default function ProductShowcase(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = slides.length;

  const goTo = useCallback((idx: number, dir: 'next' | 'prev' = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 550);
  }, [animating]);

  const next = useCallback(() =>
    goTo((current + 1) % count, 'next'), [current, count, goTo]);

  const prev = useCallback(() =>
    goTo((current - 1 + count) % count, 'prev'), [current, count, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Product highlights carousel"
    >
      {/* Background images — all preloaded, active one is visible */}
      <div className={styles.bgLayer}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`
              ${styles.bgSlide}
              ${i === current ? styles.bgSlideActive : ''}
              ${animating && i === current ? (direction === 'next' ? styles.bgEnterNext : styles.bgEnterPrev) : ''}
            `}
          >
            <img
              src={s.image}
              alt={s.imageAlt}
              className={styles.bgImg}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Dark vignette — strong at edges, lighter centre so product pops */}
            <div className={styles.vignette} />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className={styles.contentWrap}>

        {/* Left — text */}
        <div
          className={`${styles.textBlock} ${animating ? styles.textHide : styles.textShow}`}
          key={current}
        >
          <div className={styles.category}>{slide.category}</div>
          <h2 className={styles.title}>{slide.title}</h2>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.tag}>{slide.tag}</div>
        </div>

        {/* Right — slide counter + dots */}
        <div className={styles.controls}>
          <div className={styles.counter}>
            <span className={styles.counterCurrent}>
              {String(current + 1).padStart(2, '0')}
            </span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>
              {String(count).padStart(2, '0')}
            </span>
          </div>
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {/* <div className={styles.progressBar}>
        <div
          className={`${styles.progressFill} ${!paused ? styles.progressAnimate : ''}`}
          key={`${current}-${paused}`}
        />
      </div> */}

      {/* Arrow buttons */}
      <button
        type="button"
        aria-label="Previous product"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Next product"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
      >
        <ChevronRight size={22} />
      </button>

      {/* Thumbnail strip at bottom */}
      {/* <div className={styles.thumbStrip}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Show ${s.title}`}
            className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
          >
            <img src={s.image} alt={s.title} className={styles.thumbImg} />
            <div className={styles.thumbOverlay} />
            <span className={styles.thumbLabel}>{s.category}</span>
          </button>
        ))}
      </div> */}
    </section>
  );
}
