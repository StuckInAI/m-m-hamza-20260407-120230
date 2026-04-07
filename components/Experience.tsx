import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    location: 'San Francisco, CA',
    desc: 'Lead development of microservices architecture serving 1M+ users. Mentored junior developers and drove adoption of TypeScript across the team.',
    achievements: [
      'Reduced API latency by 40% through caching strategies',
      'Led migration from monolith to microservices',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    current: true
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    location: 'Remote',
    desc: 'Built and shipped 3 major product features that contributed to 150% revenue growth. Worked closely with design and product teams.',
    achievements: [
      'Architected real-time notification system for 50k users',
      'Built mobile-responsive design system from scratch',
      'Integrated Stripe payments processing $2M+ monthly'
    ],
    current: false
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 – 2020',
    location: 'New York, NY',
    desc: 'Delivered 10+ client projects on time and within budget. Specialized in React and modern JavaScript frameworks.',
    achievements: [
      'Improved page load speed by 55% with optimization techniques',
      'Built accessible UI components meeting WCAG 2.1 standards',
      'Introduced automated testing increasing coverage to 80%'
    ],
    current: false
  }
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and key achievements</p>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.lineCol}>
                <div className={`${styles.dot} ${exp.current ? styles.dotActive : ''}`}>
                  {exp.current && <div className={styles.dotRing} />}
                </div>
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.meta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.separator}>·</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <div className={`${styles.period} ${exp.current ? styles.periodActive : ''}`}>
                    {exp.period}
                  </div>
                </div>
                <p className={styles.desc}>{exp.desc}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} className={styles.achievement}>
                      <span className={styles.checkIcon}>✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
