import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Resume from './pages/Resume';
import Research from './components/Research/Research';
import Reading from './components/Reading/Reading';
import Roadtrip from './components/Roadtrip/Roadtrip';
import Contact from './pages/Contact';

function App() {
  // You can use this state to change theme if needed
  const [theme, setTheme] = useState('default');
  
  return (
    <Router>
      <div className={`App ${theme}`}>
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/roadtrip" element={<Roadtrip />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <footer className="footer">
            <p>Last updated: April 2025 • Built with LaTeX styling</p>
          </footer> */}
        </main>
      </div>
    </Router>
  );
}

export default App;