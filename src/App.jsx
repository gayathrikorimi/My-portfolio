import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const STORAGE_KEY = 'beautiful-portfolio.user';


function App() {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="app">
      <Header user={user} onLogout={() => setUser(DEFAULT_USER)} />
      <main className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<Profile user={user} onUpdateUser={setUser} />} />
          <Route path="/about" element={<About user={user} />} />
          <Route path="/skills" element={<Skills user={user} />} />
          <Route path="/projects" element={<Projects user={user} />} />
          <Route path="/contact" element={<Contact user={user} />} />
          <Route path="*" element={<Navigate to="/profile" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
