import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import AccessibilityToolbar from './AccessibilityToolbar';

function Home() {
  const navigate = useNavigate();

  const handleStemSplitterClick = () => {
    navigate('/stem-splitter'); // Navigates to the StemSplitter component
  };

  const handleMusicVisualizationClick = () => {
    navigate('/music-visualization'); // Navigates to the MusicVisualization component
  };

  const handleAiComposedMelodiesClick = () => {
    navigate('/ai-composed-melodies'); // Navigates to the AiComposedMelodies component
  };

  return (
    <>
      <div className="column-container">
        <h1>AI-assisted Music Accessibility</h1>
        <p className="quote-body">"Without music, life would be a mistake."</p>
        <p className="quote-author">— Friedrich Nietzsche</p>
        <p className="content">Artificial Intelligence has revolutionized society in a number of ways. One area where this change is especially noticeable is in art, and specifically music. Artists are using AI in various ways to create novel music.</p>
        <p className="content">However, not many discuss the intersection of AI with music accessibility. AI has already demonstrated several ways that it can make music, from listening to creation, more enjoyable for a wider audience.</p>
        <p className="content">Choose a technology below to start learning!</p>
        <div className="buttons-row" aria-label="Music technology options">
          <button onClick={handleStemSplitterClick} aria-label="Learn about Stem Splitters">
            <img src={'https://vocalremover.org/img/splitter/player_en.png'} alt="Illustration of Stem Splitter technology showing a user interface with audio track layers" />
            Stem Splitters
          </button>
          <button onClick={handleMusicVisualizationClick} aria-label="Learn about AI Music Visualization">
            <img src={'https://wzrd.ai/static/67b83272a88c1a322fe82f0887e4025e/0a45a/divine_1024x1024.jpg'} alt="3x3 grid of stills from AI music videos." />
            AI Music Visualization
          </button>
          <button onClick={handleAiComposedMelodiesClick} aria-label="Learn about AI Composed Melodies">
            <img src={'https://miro.medium.com/v2/resize:fit:1200/1*62DW4EnILgAVkpw4UQwECg.png'} alt="3D render of a robot DJing." />
            AI-Composed Melodies
          </button>
        </div>
      </div>
      <AccessibilityToolbar />
    </>
  );
}

export default Home;
