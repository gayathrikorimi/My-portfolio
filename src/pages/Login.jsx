import { useState } from 'react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please provide a name, email, and password.');
      return;
    }

    setError('');
    onLogin({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });
  };

  return (
    <section className="page__content page__content--center">
      <div className="card card--narrow">
        <h2>Welcome</h2>
        <p className="muted">
          This portfolio app uses a simple local login to let you personalize the profile.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label className="form__field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
            />
          </label>

          <label className="form__field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="form__field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter a password"
              required
            />
          </label>

          {error && <p className="form__error">{error}</p>}

          <button className="btn btn--primary" type="submit">
            Enter Portfolio
          </button>
        </form>
      </div>
    </section>
  );
}
