import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={styles['statistic-section']}>
    <h2 className={styles['section-title']}>{title}</h2>
    {children}
  </section>
);