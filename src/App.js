import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import StemSplitter from './StemSplitter';
import MusicVisualization from './MusicVisualization';  // Import the new component
import AiComposedMelodies from './AiComposedMelodies';  // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stem-splitter" element={<StemSplitter />} />
        <Route path="/music-visualization" element={<MusicVisualization />} /> 
        <Route path="/ai-composed-melodies" element={<AiComposedMelodies />} /> 

      </Routes>
    </Router>
  );
}

export default App;
