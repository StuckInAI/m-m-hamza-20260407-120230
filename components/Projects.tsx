import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with Next.js, Node.js, and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    color: '#6c63ff',
    emoji: '🛒',
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'AI Content Generator',
    desc: 'SaaS platform that leverages OpenAI to generate marketing copy, blog posts, and social media content with a subscription model.',
    tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    color: '#ff6584',
    emoji: '🤖',
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Real-Time Dashboard',
    desc: 'Analytics dashboard with live data visualization, WebSocket integration, and customizable widgets for monitoring business KPIs.',
    tags: ['React', 'D3.js', 'WebSockets', 'Redis'],
    color: '#43e97b',
    emoji: '📊',
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative project management tool with drag-and-drop, team workspaces, and integrations with Slack and GitHub.',
    tags: ['React', 'GraphQL', 'Docker', 'AWS'],
    color: '#f7971e',
    emoji: '📋',
    github: '#',
    live: '#',
    featured: false
  },
  {
    title: 'DevOps Pipeline Tool',
    desc: 'CI/CD automation platform that streamlines deployments with visual pipeline builder, rollback support, and monitoring.',
    tags: ['Node.js', 'Docker', 'K8s', 'GitHub Actions'],
    color: '#667eea',
    emoji: '🔧',
    github: '#',
    live: '#',
    featured: false
  },
  {
    title: 'Social Media API',
    desc: 'RESTful API service for a social platform with authentication, media uploads, notifications, and recommendation engine.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    color: '#56ccf2',
    emoji: '🌐',
    github: '#',
    live: '#',
    featured: false
  }
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>
        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.title} className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.cardTop} style={{ background: `${project.color}14` }}>
                <span className={styles.emoji}>{project.emoji}</span>
                {project.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <a href={project.github} className={styles.link}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <a href={project.live} className={styles.liveLink}>
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <a href="#" className={styles.viewAllBtn}>View All Projects</a>
        </div>
      </div>
    </section>
  );
}
