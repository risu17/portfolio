import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="page-section about-section">
      <div className="section-header">
        <h1 className="section-title">{t.about.title}</h1>
        <p className="section-lead">{t.about.lead}</p>
      </div>

      <div className="about-grid">
        <div className="about-text-column">
          <p className="about-paragraph">{t.about.p1}</p>
          <p className="about-paragraph">{t.about.p2}</p>
          <p className="about-paragraph">{t.about.p3}</p>

          <div className="about-actions">
            <Link to="/projects" className="btn btn-primary">
              {t.home.viewProjectsBtn}
            </Link>
            <Link to="/resume" className="btn btn-outline">
              {t.nav.resume}
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {t.home.contactBtn}
            </Link>
          </div>
        </div>

        <div className="about-details-column">
          <div className="details-box">
            <h2 className="details-box-title">{t.about.detailsTitle}</h2>
            
            <dl className="details-list">
              <div className="details-item">
                <dt className="details-label">{t.about.statusLabel}</dt>
                <dd className="details-value">{t.about.statusValue}</dd>
              </div>

              <div className="details-item">
                <dt className="details-label">{t.about.locationLabel}</dt>
                <dd className="details-value">{t.about.locationValue}</dd>
              </div>

              <div className="details-item">
                <dt className="details-label">{t.about.focusLabel}</dt>
                <dd className="details-value">{t.about.focusValue}</dd>
              </div>

              <div className="details-item">
                <dt className="details-label">{t.about.projectsCountLabel}</dt>
                <dd className="details-value">{t.about.projectsCountValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
