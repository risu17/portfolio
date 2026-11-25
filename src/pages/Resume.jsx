import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Resume = () => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="page-section resume-page-section">
      {/* Top action toolbar (hidden on print) */}
      <div className="resume-toolbar">
        <div className="resume-toolbar-info">
          <h1 className="resume-page-title">{t.resume.title}</h1>
          <p className="resume-page-subtitle">{t.resume.subtitle}</p>
        </div>
        <div className="resume-toolbar-actions">
          <button
            type="button"
            className="btn btn-primary print-btn"
            onClick={handlePrint}
            title={t.resume.printBtn}
          >
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>{t.resume.printBtn}</span>
          </button>
          <Link to="/contact" className="btn btn-outline">
            {t.resume.contactMeBtn}
          </Link>
        </div>
      </div>

      <p className="resume-print-note">{t.resume.printNote}</p>

      {/* Printable Resume Sheet Document */}
      <article className="resume-sheet" id="printable-resume">
        {/* Document Header */}
        <header className="resume-header">
          <h1 className="resume-name">{t.resume.header.name}</h1>
          <p className="resume-headline">{t.resume.header.title}</p>

          <div className="resume-contact-row">
            <span className="resume-contact-item">
              <strong>Location:</strong> {t.resume.header.location}
            </span>
            <span className="resume-contact-sep">•</span>
            <a
              href={`mailto:${t.resume.header.email}`}
              className="resume-contact-item resume-contact-link"
            >
              {t.resume.header.email}
            </a>
            <span className="resume-contact-sep">•</span>
            <a
              href={t.resume.header.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-item resume-contact-link"
            >
              {t.resume.header.github} ↗
            </a>
            <span className="resume-contact-sep">•</span>
            <a
              href={t.resume.header.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-item resume-contact-link"
            >
              {t.resume.header.linkedin} ↗
            </a>
          </div>
        </header>

        <hr className="resume-divider" />

        {/* Section 1: Professional Summary */}
        <section className="resume-section-block">
          <h2 className="resume-block-title">{t.resume.summary.title}</h2>
          <p className="resume-summary-text">{t.resume.summary.text}</p>
        </section>

        {/* Section 2: Technical Skills */}
        <section className="resume-section-block">
          <h2 className="resume-block-title">{t.resume.skills.title}</h2>
          <div className="resume-skills-table">
            <div className="resume-skill-row">
              <span className="resume-skill-category">{t.resume.skills.languagesTitle}:</span>
              <span className="resume-skill-values">
                {t.resume.skills.languages.join(', ')}
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-category">{t.resume.skills.coreTitle}:</span>
              <span className="resume-skill-values">
                {t.resume.skills.core.join(', ')}
              </span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-category">{t.resume.skills.toolsTitle}:</span>
              <span className="resume-skill-values">
                {t.resume.skills.tools.join(', ')}
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Education */}
        <section className="resume-section-block">
          <h2 className="resume-block-title">{t.resume.education.title}</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">{t.resume.education.degree}</h3>
                <p className="resume-entry-sub">{t.resume.education.location}</p>
              </div>
              <span className="resume-entry-date">{t.resume.education.duration}</span>
            </div>
            <p className="resume-entry-detail">{t.resume.education.focus}</p>
          </div>
        </section>

        {/* Section 4: Projects */}
        <section className="resume-section-block">
          <h2 className="resume-block-title">{t.resume.projects.title}</h2>
          <div className="resume-projects-list">
            {t.resume.projects.items.map((project, idx) => (
              <div key={idx} className="resume-project-item">
                <div className="resume-project-header">
                  <div className="resume-project-title-group">
                    <h3 className="resume-project-title">{project.title}</h3>
                    <span className="resume-project-tech">({project.tech})</span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-project-link"
                  >
                    GitHub ↗
                  </a>
                </div>
                <p className="resume-project-desc">{project.description}</p>
                <ul className="resume-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Key Highlights & Strengths */}
        <section className="resume-section-block">
          <h2 className="resume-block-title">{t.resume.strengths.title}</h2>
          <ul className="resume-bullets">
            {t.resume.strengths.items.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Resume;
