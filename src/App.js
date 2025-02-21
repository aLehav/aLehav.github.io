import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Reading from './components/Reading/Reading';
import Research from './components/Research/Research';
import Resume from './components/Resume/Resume';
import Roadtrip from './components/Roadtrip/Roadtrip.tsx';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadtrip" element={<Roadtrip />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;