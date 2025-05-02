import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Resume from './pages/Resume';
import Reading from './pages/Reading';
import Roadtrip from './pages/Roadtrip';
import Contact from './pages/Contact';
import Ramsey from './pages/Ramsey';
import Antisemitism from './pages/Antisemitism';

function App() {
  // You can use this state to change theme if needed
  const theme = 'default'
  
  return (
    <Router>
      <div className={`App ${theme}`}>
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/roadtrip" element={<Roadtrip />} />
            <Route path="/ramsey" element={<Ramsey />} />
            <Route path="/campus-hate" element={<Antisemitism />} />
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