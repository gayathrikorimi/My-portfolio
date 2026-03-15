import { useState } from 'react';

export default function Projects() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A full-stack portfolio website showcasing projects, skills, and contact links.',
      tech: ['React', 'Vite', 'CSS'],
      url: '#',
      details:
        'This portfolio app is built with React and Vite. It includes a login flow, navigation, and configurable sections for About, Skills, and Projects.',
    },
    {
      title: 'Project Two',
      description: 'Another project with a short summary and the key takeaways.',
      tech: ['API', 'Node.js', 'Tailwind'],
      url: '#',
      details:
        'Project Two is a sample app that demonstrates how to consume APIs and display dynamic data with modern styling.',
    },
  ];

  const toggleProject = (title) => {
    setActive((current) => (current === title ? null : title));
  };

  return (
    <section className="page__content">
      <header className="page__header">
        <h2>Projects</h2>
        <p className="muted">A few examples of work that demonstrate what I build.</p>
      </header>

      <div className="card-grid">
        {projects.map((project) => {
          const isOpen = active === project.title;
          return (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="muted">Tech: {project.tech.join(', ')}</p>

              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => toggleProject(project.title)}
              >
                {isOpen ? 'Hide details' : 'View project'}
              </button>

              {isOpen && (
                <div className="project-details">
                  <p>{project.details}</p>
                  {project.url && project.url !== '#' ? (
                    <p>
                      <strong>Live:</strong>{' '}
                      <a href={project.url} target="_blank" rel="noreferrer">
                        {project.url}
                      </a>
                    </p>
                  ) : null}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
