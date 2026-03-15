export default function Contact() {
  return (
    <section className="page__content">
      <header className="page__header">
        <h2>Contact</h2>
        <p className="muted">Get in touch or find me on social media.</p>
      </header>

      <div className="card">
        <p>
          Feel free to reach out via email or connect on LinkedIn and GitHub.
        </p>
        <ul className="profile-list">
          <li>
            <strong>Email:</strong> <a href="mailto:you@example.com">you@example.com</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/gayathrikorimi" target="_blank" rel="noreferrer">github.com/gayathrikorimi</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/gayathri-korimilli-681808294/" target="_blank" rel="noreferrer">
              linkedin.com/in/gayathri-korimilli-681808294
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
