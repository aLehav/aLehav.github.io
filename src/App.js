import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Reading from './components/Reading/Reading';
import Ramsey from './components/Ramsey/Ramsey';
import Antisemitism from './components/Antisemitism/Antisemitism';
import Resume from './components/Resume/Resume';
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
            <Route path="/ramsey-theory" element={<Ramsey />} />
            <Route path="/antisemitism" element={<Antisemitism />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;