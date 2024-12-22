import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/Project';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/footer';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
  <div className={`app ${theme}`}>
    <header>
      <h1>Taher&prime;s Portfolio</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>

    <Footer />
  </div>
</Router>
  );
};

export default App;
