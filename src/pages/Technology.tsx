import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Gauge, Cpu, Layers, Sparkles, Eye } from 'lucide-react';
import styles from './Technology.module.css';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const machines = [
  {
    num: '01',
    icon: Cpu,
    name: 'SAACKE 5-axis CNC Grinding',
    detail:
      'SAACKE 5-axis tool grinding machines are part of the RMTT manufacturing facility.',
    // TODO: confirm with client
    // specs: ['5-axis simultaneous interpolation', 'Sub-micron geometric accuracy', 'Internal coolant hole grinding', 'Repeatable setups via digital machine memory'],
  },
  {
    num: '02',
    icon: Sparkles,
    name: 'VOLLMER Wire EDM',
    detail:
      'VOLLMER Wire EDM is part of the RMTT manufacturing facility for PCD tooling.',
    // TODO: confirm with client
    // specs: ['PCD & CBN compatible', 'Edge geometry to ±0.002mm', 'Precision lapping post-EDM', 'No heat-affected zone'],
  },
  {
    num: '03',
    icon: Eye,
    name: 'Walter Helicheck Optical Measurement',
    detail:
      'The RMTT facility includes a Walter Helicheck measuring machine.',
    // TODO: confirm with client
    // specs: ['Non-contact optical measurement', 'Full geometry verification', '100% outgoing inspection', 'Digital measurement records per tool'],
  },
  {
    num: '04',
    icon: Gauge,
    name: 'Swiss Cylindrical Grinding',
    detail:
      'The RMTT facility includes Swiss cylindrical grinding systems.',
    // TODO: confirm with client
    // specs: ['h5/h6 shank tolerance', 'Runout < 0.003mm', 'Alumina and CBN wheels', 'Suitable for all carbide grades'],
  },
  {
    num: '05',
    icon: Layers,
    name: 'Edge Preparation & Honing',
    detail:
      'The RMTT facility includes advanced edge honing and polishing equipment.',
    // TODO: confirm with client
    // specs: ['Drag finishing and brush honing', 'K-factor 0.8–2.0 µm Rk', 'Consistent edge radius control', 'Pre-coating surface preparation'],
  },
  {
    num: '06',
    icon: Microscope,
    name: 'PVD Coating Solutions',
    detail:
      'The catalogue describes application-specific wear-resistant PVD coatings.',
    // TODO: confirm with client
    // specs: ['AlTiN — steel and cast iron', 'TiSiN — hardened steel (>55 HRC)', 'DLC — aluminium and non-ferrous', 'nACo — general high-performance'],
  },
];

const processSteps = [
  { step: '01', title: 'Application analysis', desc: 'You share the part drawing, material, machine type and cycle requirements. We analyse and design the optimal tool geometry.' },
  { step: '02', title: 'Tool design & DFM', desc: 'Our engineers create the tool design optimised for your application. We apply Design for Manufacturability to balance performance and cost.' },
  { step: '03', title: 'Manufacturing', desc: 'Tool is manufactured on SAACKE grinding or VOLLMER EDM, with edge preparation and appropriate coating applied.' },
  { step: '04', title: 'Inspection & dispatch', desc: 'The facility includes Walter Helicheck measurement equipment.' },
];

export default function Technology() {
  return (
    <main className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">Our capabilities</div>
          <h1 className={styles.pageTitle}>Manufacturing technology</h1>
          <p className={styles.pageSubtitle}>
            German-benchmark equipment operated by experienced engineers from our Bengaluru facility. The facility includes SAACKE grinding, VOLLMER Wire EDM and Walter Helicheck measurement equipment.
          </p>
        </div>
      </section>

      {/* Machines */}
      <section className={styles.machinesSection}>
        <div className="container">
          <div className={styles.machinesGrid}>
            {machines.map((m, i) => (
              <article key={m.num} className={`${styles.machineCard} ${i % 2 === 1 ? styles.machineCardAlt : ''}`}>
                <div className={styles.machineImg}>
                  <PhotoPlaceholder icon={m.icon} />
                </div>
                <div className={styles.machineBody}>
                  <div className={styles.machineNum}>{m.num}</div>
                  <div className={styles.machineIconWrap}>
                    <m.icon size={22} />
                  </div>
                  <h2 className={styles.machineName}>{m.name}</h2>
                  <p className={styles.machineDetail}>{m.detail}</p>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHead}>
            <div className="section-eyebrow">From enquiry to delivery</div>
            <h2 className={styles.processTitle}>Our manufacturing process</h2>
            <p className={styles.processSub}>Transparent, fast and technical — from your requirement to a precision tool at your machine.</p>
          </div>
          <div className={styles.processSteps}>
            {processSteps.map((p, i) => (
              <div key={p.step} className={styles.processStep}>
                <div className={styles.processStepNum}>{p.step}</div>
                {i < processSteps.length - 1 && <div className={styles.processLine} />}
                <div className={styles.processStepContent}>
                  <div className={styles.processStepTitle}>{p.title}</div>
                  <div className={styles.processStepDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>See our technology in action</h2>
          <p className={styles.ctaSub}>Submit your application requirement and our engineers will demonstrate how our equipment solves your machining challenge.</p>
          <Link to="/contact" className={styles.ctaBtn}>
            Start a technical discussion <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
