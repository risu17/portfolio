import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Extracts GitHub owner and repository name from a URL.
 * Example: "https://github.com/risu17/miraisite" -> { owner: "risu17", repo: "miraisite" }
 */
const getGitHubRepoInfo = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('github.com')) {
      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parts.length >= 2) {
        return { owner: parts[0], repo: parts[1] };
      }
    }
  } catch (e) {
    // Ignore invalid URL format
  }
  return null;
};

const ProjectCard = ({ project }) => {
  const { language, t } = useLanguage();

  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;

  // Initial tech state: prioritize cache, then project.tech fallback
  const [techList, setTechList] = useState(() => {
    const repoInfo = getGitHubRepoInfo(project.link);
    if (repoInfo) {
      const cacheKey = `gh_tech_${repoInfo.owner}_${repoInfo.repo}`;
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
    }
    return project.tech && project.tech.length > 0 ? project.tech : [];
  });

  const [isDetecting, setIsDetecting] = useState(false);

  // Automatically detect technologies used in repository files
  useEffect(() => {
    const repoInfo = getGitHubRepoInfo(project.link);
    if (!repoInfo) return;

    const cacheKey = `gh_tech_${repoInfo.owner}_${repoInfo.repo}`;

    // If already in cache, use it
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTechList(parsed);
          return;
        }
      }
    } catch (e) {}

    let isMounted = true;
    setIsDetecting(true);

    // 1. Fetch file languages from GitHub API
    fetch(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/languages`)
      .then((res) => {
        if (!res.ok) throw new Error('Languages API unavailable');
        return res.json();
      })
      .then(async (languagesData) => {
        if (!isMounted) return;
        const languages = Object.keys(languagesData);
        let detected = [...languages];

        // 2. Check root contents for package.json frameworks (React, Vue, Vite, etc.)
        try {
          const contentsRes = await fetch(
            `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/contents`
          );
          if (contentsRes.ok) {
            const contents = await contentsRes.json();
            const hasPackageJson = Array.isArray(contents) && contents.some((f) => f.name === 'package.json');
            if (hasPackageJson) {
              const pkgRes = await fetch(
                `https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/HEAD/package.json`
              );
              if (pkgRes.ok) {
                const pkg = await pkgRes.json();
                const allDeps = {
                  ...(pkg.dependencies || {}),
                  ...(pkg.devDependencies || {})
                };
                if (allDeps['react']) detected.unshift('React');
                if (allDeps['vue']) detected.unshift('Vue');
                if (allDeps['next']) detected.unshift('Next.js');
                if (allDeps['vite']) detected.push('Vite');
                if (allDeps['tailwindcss']) detected.push('Tailwind CSS');
              }
            }
          }
        } catch (frameworkErr) {
          // Gracefully continue with language list
        }

        const uniqueTech = Array.from(new Set(detected));

        if (uniqueTech.length > 0) {
          setTechList(uniqueTech);
          try {
            localStorage.setItem(cacheKey, JSON.stringify(uniqueTech));
          } catch (e) {}
        }
      })
      .catch(() => {
        // Graceful fallback to project.tech if offline or rate-limited
        if (project.tech && project.tech.length > 0) {
          setTechList(project.tech);
        }
      })
      .finally(() => {
        if (isMounted) setIsDetecting(false);
      });

    return () => {
      isMounted = false;
    };
  }, [project.link, project.tech]);

  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      
      <div className="project-tech-section">
        <span className="tech-label">{t.projects.techLabel}:</span>
        <div className="tech-tags">
          {techList.length > 0 ? (
            techList.map((item, index) => (
              <span key={index} className="tech-tag">
                {item}
              </span>
            ))
          ) : isDetecting ? (
            <span className="tech-tag tech-tag-detecting">Detecting...</span>
          ) : (
            <span className="tech-tag tech-tag-detecting">Auto-detected</span>
          )}
        </div>
      </div>

      <div className="project-card-footer">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          {t.projects.viewProjectBtn}
          <span className="external-icon" aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
