import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 50);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className={`page__content hero ${visible ? 'hero--visible' : ''}`}>
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__tag">Hi, I'm  Gayathri</p>
          <h1 className="hero__title">Aspiring Full Stack Developer</h1>

          <div className="btn-group">
            <button className="btn btn--primary" onClick={() => navigate('/projects')}>
              View My Projects
            </button>
            <a className="btn btn--secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <button className="btn btn--ghost" onClick={() => navigate('/contact')}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__imageWrapper">
          <div className="hero__image">
            <img
              src="/profile.jpeg"
              alt="Gayathri profile"
              onError={(event) => {
                event.currentTarget.src = 'https://via.placeholder.com/400?text=Profile+Photo';
              }}
            />
          </div>
        </div>
      </div>

      <div className="profile-overview">
        <div className="profile-card">
          <h2>About Me</h2>
          <p>
            I’m a B.Tech student with a goal of becoming a skilled Full Stack Developer. I love building modern,
            responsive, and user-friendly applications that solve real problems.
          </p>
          <ul className="profile-list">
            <li><strong>Education:</strong> B.Tech Student</li>
            <li><strong>Role:</strong> Aspiring Full Stack Developer</li>
            <li>
              <strong>Technologies:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
