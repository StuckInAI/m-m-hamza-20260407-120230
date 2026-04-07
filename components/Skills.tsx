import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Sass', level: 88 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 78 }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Docker / K8s', level: 82 },
      { name: 'AWS / GCP', level: 78 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Git / GitHub', level: 95 }
    ]
  }
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Redis', 'Prisma', 'Tailwind'
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">Technologies I work with on a daily basis</p>
        <div className={styles.categories}>
          {skillCategories.map(cat => (
            <div key={cat.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.category}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.techCloud}>
          <h3 className={styles.techTitle}>Tech Stack</h3>
          <div className={styles.tags}>
            {techStack.map(tech => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
