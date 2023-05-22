import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [selection, setSelection] = useState('');
  return (
    <Router>
      <div className={`App ${selection === '' ? '' : selection}`}>
        <Navbar setSelection={setSelection}/>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
