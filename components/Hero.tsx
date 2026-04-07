import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>Available for work</div>
        <h1 className={styles.heading}>
          Hi, I&apos;m <span className={styles.name}>John Doe</span>
        </h1>
        <h2 className={styles.role}>Full-Stack Developer</h2>
        <p className={styles.desc}>
          I craft beautiful, performant web applications with modern technologies.
          Passionate about clean code, great UX, and scalable architecture.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryBtn}>View My Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Years Exp.</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>40+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>20+</span>
            <span className={styles.statLabel}>Clients</span>
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
        <span>Scroll Down</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
