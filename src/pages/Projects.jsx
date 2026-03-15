import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio website to showcase my skills, projects, and contact information.",
      tech: ["React", "Vite", "CSS"],
      details:
        "This portfolio website is built using React and Vite. It includes sections like Home, About, Skills, Projects, and Contact. The website is fully responsive and designed to present my work and technical skills professionally.",
    },

    {
      title: "AI-Based Personalized Learning and Evaluation System",
      description:
        "An AI-powered platform that helps students learn topics and evaluate their knowledge through smart assessments.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      url: "#",
      details:
        "This system provides personalized learning content based on the user's selected subject and skill level. It generates quizzes and evaluates answers automatically to give feedback and scores. The goal of the project is to improve learning efficiency using AI-based recommendations and assessments.",
    },
  ];

  const toggleProject = (title) => {
    setActive((current) => (current === title ? null : title));
  };

  return (
    <section className="page__content">
      <header className="page__header">
        <h2>My Projects</h2>
        <p className="muted">
          Here are some projects that demonstrate my development skills.
        </p>
      </header>

      <div className="card-grid">
        {projects.map((project) => {
          const isOpen = active === project.title;

          return (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p className="muted">
                <strong>Technologies:</strong> {project.tech.join(", ")}
              </p>

              <button
                className="btn btn--secondary"
                onClick={() => toggleProject(project.title)}
              >
                {isOpen ? "Hide Details" : "View Project"}
              </button>

              {isOpen && (
                <div className="project-details">
                  <p>{project.details}</p>

                  {project.url !== "#" && (
                    <p>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        View on GitHub
                      </a>
                    </p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}