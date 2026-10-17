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
      'Our primary manufacturing platform for all solid carbide and brazed carbide tools. SAACKE\'s 5-axis grinding machines deliver sub-micron tolerance on all rotary tool geometries — helix, relief angles, edge radius and concentricity.',
    // TODO: confirm with client
    // specs: ['5-axis simultaneous interpolation', 'Sub-micron geometric accuracy', 'Internal coolant hole grinding', 'Repeatable setups via digital machine memory'],
  },
  {
    num: '02',
    icon: Sparkles,
    name: 'VOLLMER Wire EDM',
    detail:
      'Dedicated to PCD and CBN tool manufacturing. Wire EDM allows precise cutting of polycrystalline diamond segments that cannot be conventionally ground. Combined with precision lapping, we achieve Ra < 0.4 on PCD cutting edges.',
    // TODO: confirm with client
    // specs: ['PCD & CBN compatible', 'Edge geometry to ±0.002mm', 'Precision lapping post-EDM', 'No heat-affected zone'],
  },
  {
    num: '03',
    icon: Eye,
    name: 'Walter Helicheck Optical Measurement',
    detail:
      'Every tool produced at Riddhi is inspected on Walter Helicheck optical non-contact measurement system before shipping. This gives us a full digital record of geometry, runout, edge radius and surface finish for every serial number.',
    // TODO: confirm with client
    // specs: ['Non-contact optical measurement', 'Full geometry verification', '100% outgoing inspection', 'Digital measurement records per tool'],
  },
  {
    num: '04',
    icon: Gauge,
    name: 'Swiss Cylindrical Grinding',
    detail:
      'High-precision cylindrical grinding systems for shank and body grinding. Achieves h5 and h6 tolerance on tool shanks and body diameters, ensuring concentricity and fit in all standard tool holders.',
    // TODO: confirm with client
    // specs: ['h5/h6 shank tolerance', 'Runout < 0.003mm', 'Alumina and CBN wheels', 'Suitable for all carbide grades'],
  },
  {
    num: '05',
    icon: Layers,
    name: 'Edge Preparation & Honing',
    detail:
      'Micro-geometry edge preparation is performed on all tools before coating. Controlled edge honing removes micro-chipping risk and provides the ideal surface for PVD coating adhesion, extending tool life significantly.',
    // TODO: confirm with client
    // specs: ['Drag finishing and brush honing', 'K-factor 0.8–2.0 µm Rk', 'Consistent edge radius control', 'Pre-coating surface preparation'],
  },
  {
    num: '06',
    icon: Microscope,
    name: 'PVD Coating Solutions',
    detail:
      'We work with leading coating partners to apply the right coating for each application. AlTiN for high-temperature steel and cast iron machining, TiSiN for hardened materials, DLC for aluminium and non-ferrous applications.',
    // TODO: confirm with client
    // specs: ['AlTiN — steel and cast iron', 'TiSiN — hardened steel (>55 HRC)', 'DLC — aluminium and non-ferrous', 'nACo — general high-performance'],
  },
];

const processSteps = [
  { step: '01', title: 'Application analysis', desc: 'You share the part drawing, material, machine type and cycle requirements. We analyse and design the optimal tool geometry.' },
  { step: '02', title: 'Tool design & DFM', desc: 'Our engineers create the tool design optimised for your application. We apply Design for Manufacturability to balance performance and cost.' },
  { step: '03', title: 'Manufacturing', desc: 'Tool is manufactured on SAACKE grinding or VOLLMER EDM, with edge preparation and appropriate coating applied.' },
  { step: '04', title: 'Inspection & dispatch', desc: '100% inspection on Walter Helicheck with measurement report. Shipped with tool setting data and recommended cutting parameters.' },
];

export default function Technology() {
  return (
    <main className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">Our capabilities</div>
          <h1 className={styles.pageTitle}>Manufacturing technology</h1>
          <p className={styles.pageSubtitle}>
            German-benchmark equipment operated by experienced engineers from our Bengaluru facility. Every Riddhi tool is born from precision machinery and verified by optical measurement.
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
