import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      id: 'email',
      label: t.contact.emailLabel,
      value: 'risu26121711@gmail.com',
      href: 'mailto:risu26121711@gmail.com',
      isLink: true
    },
    {
      id: 'github',
      label: t.contact.githubLabel,
      value: 'github.com/risu17',
      href: 'https://github.com/risu17',
      isLink: true,
      external: true
    },
    {
      id: 'linkedin',
      label: t.contact.linkedinLabel,
      value: 'linkedin.com/in/hrishi-raj-bb3787433',
      href: 'https://www.linkedin.com/in/hrishi-raj-bb3787433/',
      isLink: true,
      external: true
    },
    {
      id: 'location',
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
      isLink: false
    }
  ];

  return (
    <section className="page-section contact-section">
      <div className="section-header">
        <h1 className="section-title">{t.contact.title}</h1>
        <p className="section-lead">{t.contact.subtitle}</p>
      </div>

      <div className="contact-card-container">
        <div className="contact-list">
          {contactItems.map(item => (
            <div key={item.id} className="contact-item">
              <span className="contact-item-label">{item.label}</span>
              {item.isLink ? (
                <a
                  href={item.href}
                  className="contact-item-link"
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.value}
                  {item.external && <span className="external-icon" aria-hidden="true"> ↗</span>}
                </a>
              ) : (
                <span className="contact-item-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
