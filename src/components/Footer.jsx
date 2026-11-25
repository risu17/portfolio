import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">{t.footer.name}</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} {t.footer.name}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
