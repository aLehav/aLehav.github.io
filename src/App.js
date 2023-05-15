import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Research from './components/Research';
import DataScience from './components/DataScience';
import SoftwareEngineering from './components/SoftwareEngineering';
import Contact from './components/Contact';
import Navbar from './Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Research/>} />
            <Route path="/research" element={<Research/>} />
            <Route path="/datascience" element={<DataScience/>} />
            <Route path="/softwareengineering" element={<SoftwareEngineering/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
