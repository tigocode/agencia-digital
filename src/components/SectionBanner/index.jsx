import styles from './SectionBanner.module.css';

export default function SectionBanner(props) {
  return (
    <section className={styles.container}>
      <div className={styles.banner_img}></div>
      <div className={styles.content }>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}
