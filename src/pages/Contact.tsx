import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CircleCheck as CheckCircle2, Upload } from 'lucide-react';
import styles from './Contact.module.css';
import { siteConfig } from '../lib/siteConfig';

const toolTypes = [
  '— Select tool type —',
  'Solid carbide end mill',
  'Solid carbide step drill',
  'Solid carbide reamer',
  'PCD reamer (multi-step)',
  'PCD face mill',
  'PCD valve seat tool',
  'Brazed carbide tool',
  'Special / custom tool',
  'Not sure — need recommendation',
];

const industries = [
  '— Select industry —',
  'Automotive',
  'Two-wheeler',
  'Aerospace',
  'Hydraulics & pneumatics',
  'Precision engineering',
  'General engineering',
  'Medical devices',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    toolType: '', industry: '', material: '', machine: '', qty: '', description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <div className="section-eyebrow">Get in touch</div>
          <h1 className={styles.pageTitle}>Request a quote</h1>
          <p className={styles.pageSubtitle}>
            Share your application details to request a technical proposal and pricing.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}><CheckCircle2 size={40} /></div>
                  <h2 className={styles.successTitle}>Request submitted!</h2>
                  <p className={styles.successText}>
                    Thank you for your enquiry. Our team will review your requirements for a technical proposal.
                  </p>
                  <button className={styles.successBtn} onClick={() => setSubmitted(false)}>
                    Submit another request
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2 className={styles.formTitle}>Your details</h2>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="name">Full name *</label>
                      <input
                        id="name" name="name" type="text" required
                        className={styles.input} placeholder="Rajesh Kumar"
                        value={form.name} onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="company">Company *</label>
                      <input
                        id="company" name="company" type="text" required
                        className={styles.input} placeholder="Your company name"
                        value={form.company} onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="email">Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        className={styles.input} placeholder="r.kumar@company.com"
                        value={form.email} onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={styles.input} placeholder="+91 98765 43210"
                        value={form.phone} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <h2 className={styles.formTitle} style={{ marginTop: 28 }}>Application details</h2>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="toolType">Tool type required</label>
                      <select id="toolType" name="toolType" className={styles.select} value={form.toolType} onChange={handleChange}>
                        {toolTypes.map(t => <option key={t} value={t === toolTypes[0] ? '' : t}>{t}</option>)}
                      </select>
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="industry">Industry</label>
                      <select id="industry" name="industry" className={styles.select} value={form.industry} onChange={handleChange}>
                        {industries.map(t => <option key={t} value={t === industries[0] ? '' : t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="material">Component material</label>
                      <input
                        id="material" name="material" type="text"
                        className={styles.input} placeholder="Aluminium die casting, Grey CI…"
                        value={form.material} onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.label} htmlFor="machine">Machine type</label>
                      <input
                        id="machine" name="machine" type="text"
                        className={styles.input} placeholder="VMC, HMC, SPM…"
                        value={form.machine} onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.formField} style={{ marginBottom: 16 }}>
                    <label className={styles.label} htmlFor="qty">Quantity per month (components)</label>
                    <input
                      id="qty" name="qty" type="text"
                      className={styles.input} placeholder="e.g. 500 components"
                      value={form.qty} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formField} style={{ marginBottom: 16 }}>
                    <label className={styles.label} htmlFor="description">Application description / challenges *</label>
                    <textarea
                      id="description" name="description" required
                      className={styles.textarea}
                      placeholder="Describe the machining challenge, current tool being used, and the problem you want to solve…"
                      value={form.description} onChange={handleChange}
                    />
                  </div>

                  <div className={styles.uploadArea}>
                    <Upload size={20} className={styles.uploadIcon} />
                    <div>
                      <div className={styles.uploadTitle}>Upload drawing (optional)</div>
                      <div className={styles.uploadSub}>PDF, DXF, DWG — up to 10 MB</div>
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <Send size={16} />
                    Submit request
                  </button>
                  <p className={styles.formNote}>By submitting you agree to our privacy policy. We never share your data.</p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Contact information</h3>
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <MapPin size={16} className={styles.contactIcon} />
                    <div>
                      <div className={styles.contactLabel}>Address</div>
                      <div className={styles.contactValue}>{siteConfig.address.street},<br />{siteConfig.address.cityLine}</div>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <Phone size={16} className={styles.contactIcon} />
                    <div>
                      <div className={styles.contactLabel}>Phone / WhatsApp</div>
                      <a href={siteConfig.phoneHref} className={styles.contactValue}>{siteConfig.phone}</a>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <Mail size={16} className={styles.contactIcon} />
                    <div>
                      <div className={styles.contactLabel}>Email</div>
                      <a href={`mailto:${siteConfig.email}`} className={styles.contactValue}>{siteConfig.email}</a>
                    </div>
                  </li>

                </ul>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>What happens next?</h3>
                <ol className={styles.nextSteps}>
                  <li className={styles.nextStep}>
                    <div className={styles.nextNum}>1</div>
                    <div>
                      <div className={styles.nextTitle}>Technical review</div>
                      <div className={styles.nextDesc}>Our engineers analyse your application requirements.</div>
                    </div>
                  </li>
                  <li className={styles.nextStep}>
                    <div className={styles.nextNum}>2</div>
                    <div>
                      <div className={styles.nextTitle}>Technical proposal</div>
                      <div className={styles.nextDesc}>We send a technical proposal with recommended tool design and pricing.</div>
                    </div>
                  </li>
                  <li className={styles.nextStep}>
                    <div className={styles.nextNum}>3</div>
                    <div>
                      <div className={styles.nextTitle}>Sample & trial</div>
                      <div className={styles.nextDesc}>Sample tools manufactured for your approval before full production order.</div>
                    </div>
                  </li>
                </ol>
              </div>

              <div className={styles.toolsPreview}>
                <img
                  src={`${import.meta.env.BASE_URL}image002.png`}
                  alt="Riddhi cutting tool range"
                  className={styles.toolsImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
