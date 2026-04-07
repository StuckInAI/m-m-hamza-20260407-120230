'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'john@example.com', href: 'mailto:john@example.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/johndoe', href: '#' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/johndoe', href: '#' },
  { icon: '🐦', label: 'Twitter', value: '@johndoe', href: '#' }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let&apos;s work together on your next project</p>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h3 className={styles.infoTitle}>Let&apos;s Talk</h3>
            <p className={styles.infoDesc}>
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <div className={styles.cards}>
              {contactInfo.map(info => (
                <a key={info.label} href={info.href} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{info.icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className={styles.successMsg}>Thank you! I&apos;ll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
