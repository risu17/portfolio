import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="page-section home-page">
      {/* Profile & Hero Header (Buttons removed for Home page) */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-photo-wrapper">
            <img
              src={profileImg}
              alt="Rishi Raj Profile"
              className="profile-photo"
            />
          </div>
          
          <h1 className="hero-title">{t.home.name}</h1>
          
          <p className="hero-tagline">{t.home.tagline}</p>
          
          <p className="hero-subline">{t.home.subline}</p>
        </div>
      </section>

      <hr className="home-divider" />

      {/* About Me Section integrated directly into Home page */}
      <section className="about-section home-about-section">
        <div className="section-header">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-lead">{t.about.lead}</p>
        </div>

        <div className="about-grid">
          <div className="about-text-column">
            <p className="about-paragraph">{t.about.p1}</p>
            <p className="about-paragraph">{t.about.p2}</p>
            <p className="about-paragraph">{t.about.p3}</p>
          </div>

          <div className="about-details-column">
            <div className="details-box">
              <h3 className="details-box-title">{t.about.detailsTitle}</h3>
              
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
    </div>
  );
};

export default Home;
