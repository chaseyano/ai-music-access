import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import StemSplitter from './StemSplitter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stem-splitter" element={<StemSplitter />} />
      </Routes>
    </Router>
  );
}

export default App;
