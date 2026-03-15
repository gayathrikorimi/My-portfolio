import { NavLink, useNavigate } from 'react-router-dom';

export default function Header({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__inner">
        <div className="brand">
          <h1 className="brand__title">Portfolio</h1>
        </div>

        <nav className="nav nav--right">
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
