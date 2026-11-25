import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="page-section projects-section">
      <div className="section-header">
        <h1 className="section-title">{t.projects.title}</h1>
        <p className="section-lead">{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
