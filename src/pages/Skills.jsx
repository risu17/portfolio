import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="page-section skills-section">
      <div className="section-header">
        <h1 className="section-title">{t.skills.title}</h1>
        <p className="section-lead">{t.skills.subtitle}</p>
      </div>

      <div className="skills-grid">
        {skillsData.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
