export default function Skills() {
  const skills = [
    { label: 'HTML & CSS', level: 'Advanced' },
    { label: 'JavaScript / TypeScript', level: 'Advanced' },
    { label: 'Node.js', level: 'Advanced' },
    { label: 'React', level: 'Advanced' },
    { label: 'APIs & Fetching Data', level: 'Intermediate' },
  ];

  return (
    <section className="page__content">
      <header className="page__header">
        <h2>Skills</h2>
        <p className="muted">A snapshot of the technologies and practices I use day-to-day.</p>
      </header>

      <div className="card-grid">
        {skills.map((skill) => (
          <div key={skill.label} className="card">
            <h3>{skill.label}</h3>
            <p className="muted">Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
