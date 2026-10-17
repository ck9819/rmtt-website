import styles from './Contact.module.css';

export default function LegalPage({ title }: { title: string }) {
  return (
    <div className={styles.main}>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>
      </section>
      <section className={styles.contactSection}>
        <div className="container">
          <p>TODO: client legal copy</p>
        </div>
      </section>
    </div>
  );
}