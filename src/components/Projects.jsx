import Section from './Section.jsx';
import { projects } from '../data/projects.js';

const Projects = () => (
  <Section id="projects" title="Projects" theme="contrast">
    <div className="card-grid">
      {projects.map((project) => (
        <article key={project.name} className="card">
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
  </Section>
);

export default Projects;
