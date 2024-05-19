import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WindowsDomain from './components/projects/WindowsDomain';
import ActiveDirectory from './components/projects/ActiveDirectory';
import DodCtf from './components/projects/DodCtf';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header>
          <h1>Javier's Portfolio</h1>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<><About /><Skills /><Projects /><Contact /></>} />
            <Route path="/windows-domain" element={<WindowsDomain />} />
            <Route path="/active-directory" element={<ActiveDirectory />} />
            <Route path="/DodCtf" element={<DodCtf />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Javier Hernandez</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;



