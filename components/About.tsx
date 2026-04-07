import styles from './About.module.css';

const facts = [
  { icon: '🎓', label: 'Education', value: 'B.Sc. Computer Science' },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
  { icon: '💼', label: 'Experience', value: '5+ Years' },
  { icon: '🌐', label: 'Languages', value: 'English, Spanish' }
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <div className={styles.imgPlaceholder}>
                <span className={styles.initials}>JD</span>
              </div>
              <div className={styles.imgDecor1} />
              <div className={styles.imgDecor2} />
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Open to opportunities
              </div>
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.eyebrow}>About Me</span>
            <h2 className="section-title">Crafting Digital Experiences</h2>
            <p className={styles.bio}>
              I&apos;m a passionate full-stack developer with over 5 years of experience building
              web applications that are not only functional but also beautiful and intuitive.
            </p>
            <p className={styles.bio}>
              I specialize in React, Next.js, Node.js, and cloud technologies. I love solving
              complex problems and turning ideas into reality through elegant code and thoughtful design.
            </p>
            <div className={styles.facts}>
              {facts.map(f => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factIcon}>{f.icon}</span>
                  <div>
                    <span className={styles.factLabel}>{f.label}</span>
                    <span className={styles.factValue}>{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className={styles.resumeBtn}>
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
