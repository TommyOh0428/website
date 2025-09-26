import { useState } from 'react';
import Section from './Section.jsx';
import { projects } from '../data/projects.js';

const VISIBLE_COUNT = 3;

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const hasOverflow = projects.length > VISIBLE_COUNT;

  const visibleProjects = hasOverflow
    ? Array.from({ length: VISIBLE_COUNT }, (_, offset) => {
        const index = (startIndex + offset) % projects.length;
        return projects[index];
      })
    : projects;

  const showPrevious = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <Section id="projects" title="Projects" theme="contrast">
      <div className={`projects-carousel${hasOverflow ? ' projects-carousel--with-controls' : ''}`}>
        {hasOverflow && (
          <button
            type="button"
            className="projects-carousel__control projects-carousel__control--prev"
            onClick={showPrevious}
            aria-label="Show previous projects"
          >
            <span aria-hidden="true">‹</span>
          </button>
        )}

        <div className="projects-carousel__viewport">
          <div className="card-grid">
            {visibleProjects.map((project) => (
              <article key={project.name} className="card">
                <div className="card__media">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="card__header">
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a className="card__link" href={project.link}>
                  View project
                </a>
              </article>
            ))}
          </div>
        </div>

        {hasOverflow && (
          <button
            type="button"
            className="projects-carousel__control projects-carousel__control--next"
            onClick={showNext}
            aria-label="Show next projects"
          >
            <span aria-hidden="true">›</span>
          </button>
        )}
      </div>
    </Section>
  );
};

export default Projects;
