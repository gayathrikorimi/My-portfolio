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
          <h1 className="hero__tag">Hi, I'm  Gayathri</h1>
          <h1 className="hero__title">Aspiring Full Stack Developer</h1>

          <div className="btn-group">
            <button className="btn btn--primary" onClick={() => navigate('/projects')}>
              View My Projects
            </button>
            <a
              href="/.GayathriResume.pdf" download  className="btn btn--secondary">
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
              src="/Photo.jpeg"
              alt="Gayathri profile" height="200" width="100"
              
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

        <div className="skills-section">
          <h2 className="skills-heading">My Skills</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <h3>Technical Skills</h3>
              <div className="skill-row">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-bar__fill" style={{ width: '60%' }} />
                </div>
                <span className="skill-value">60%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <div className="skill-bar__fill" style={{ width: '80%' }} />
                </div>
                <span className="skill-value">80%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <div className="skill-bar__fill" style={{ width: '50%' }} />
                </div>
                <span className="skill-value">50%</span>
              </div>
              <div className="skill-row">
                <span className="skill-name">HTML & CSS</span>
                <div className="skill-bar">
                  <div className="skill-bar__fill" style={{ width: '85%' }} />
                </div>
                <span className="skill-value">85%</span>
              </div>
            </div>

            <div className="skills-card">
              <h3>Professional Skills</h3>
              <div className="skills-circles">
                <div className="skill-circle" style={{ '--percent': '70%' }}>
                  <div className="skill-circle__inner">
                    <span className="skill-circle__value">70%</span>
                    <span className="skill-circle__label">Communication</span>
                  </div>
                </div>
                <div className="skill-circle" style={{ '--percent': '75%' }}>
                  <div className="skill-circle__inner">
                    <span className="skill-circle__value">75%</span>
                    <span className="skill-circle__label">Teamwork</span>
                  </div>
                </div>
                <div className="skill-circle" style={{ '--percent': '65%' }}>
                  <div className="skill-circle__inner">
                    <span className="skill-circle__value">65%</span>
                    <span className="skill-circle__label">Problem Solving</span>
                  </div>
                </div>
                <div className="skill-circle" style={{ '--percent': '75%' }}>
                  <div className="skill-circle__inner">
                    <span className="skill-circle__value">75%</span>
                    <span className="skill-circle__label">Time Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
