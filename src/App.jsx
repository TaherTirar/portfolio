import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/Project';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/footer';
import LanguageToggle from './components/LanguageToggle';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <header>
          <h1>Taher&prime;s Portfolio</h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <nav>
            <ul className="nav-links">
              <li><Link to="/">{language === 'en' ? 'Home' : 'Accueil'}</Link></li>
              <li><Link to="/projects">{language === 'en' ? 'Projects' : 'Projets'}</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
          </Routes>
        </main>

        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
