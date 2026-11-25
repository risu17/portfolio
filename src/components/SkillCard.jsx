import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SkillCard = ({ skill }) => {
  const { language } = useLanguage();
  const displayName = language === 'hi' && skill.nameHi ? skill.nameHi : skill.name;

  return (
    <div className="skill-card">
      <span className="skill-dot" aria-hidden="true">•</span>
      <span className="skill-name">{displayName}</span>
    </div>
  );
};

export default SkillCard;
