export default function Skills() {

  const frontendSkills = [
    { label: "HTML", level: "Advanced" },
    { label: "CSS", level: "Advanced" },
    { label: "JavaScript", level: "intermediate" },
    { label: "React", level: "Advanced" }
  ];

  const backendSkills = [
    { label: "Node.js", level: "intermediate" },
    { label: "MongoDB", level: "Intermediate" },
    { label: "APIs & Fetching Data", level: "Intermediate" }
  ];

  return (
    <section className="page__content">

      <header className="page__header">
        <h2>Skills</h2>

        <p className="muted">
          Here are some of the technologies and tools I have been learning and using to develop web applications.
        </p>
      </header>

      {/* Frontend Skills */}
      <h3>Frontend Skills</h3>
      <div className="card-grid">
        {frontendSkills.map((skill) => (
          <div key={skill.label} className="card">
            <h4>{skill.label}</h4>
            <p className="muted">Level: {skill.level}</p>
          </div>
        ))}
      </div>

      {/* Backend Skills */}
      <h3 style={{ marginTop: "30px" }}>Backend Skills</h3>
      <div className="card-grid">
        {backendSkills.map((skill) => (
          <div key={skill.label} className="card">
            <h4>{skill.label}</h4>
            <p className="muted">Level: {skill.level}</p>
          </div>
        ))}
      </div>

    </section>
  );
}