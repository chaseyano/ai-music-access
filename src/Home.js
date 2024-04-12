import React from 'react';
import './App.css'; // Importing the CSS file for styling

function Home() {
  return (
    <div className="column-container">
      <h1>AI-assisted Music Accessibility</h1>
      <p className="quote-body">"Without music, life would be a mistake."</p>
      <p className="quote-author">— Friedrich Nietzsche</p>
      <p className="content">Artificial Intelligence has revolutionized society in a number of ways. One area where this change is especially noticeable is in art, and specifically music. Artists are using AI in various ways to create novel music.</p>

      <p className="content">However, not many discuss the intersection of AI with music accessibility. AI has already demonstrated several ways that it can make music, from listening to creation, more enjoyable for a wider audience.</p>

      <p className="content">Choose a technology below to start learning!</p>
      <div className="buttons-row" aria-label="Music technology options">
        <button aria-label="Learn about Stem Splitters">
          <img src={'https://vocalremover.org/img/splitter/player_en.png'} alt="Illustration of Stem Splitter technology showing a user interface with audio track layers" />
          Stem Splitters
        </button>
        <button aria-label="Learn about Lyrics to Sign Language conversion">
          <img src={'https://wzrd.ai/static/67b83272a88c1a322fe82f0887e4025e/0a45a/divine_1024x1024.jpg'} alt="Graphical representation of lyrics being converted to sign language" />
          AI Music Visualization
        </button>
        <button aria-label="Learn about AI Composed Melodies">
          <img src={'https://miro.medium.com/v2/resize:fit:1200/1*62DW4EnILgAVkpw4UQwECg.png'} alt="Diagram showing the process of AI composing melodies with neural networks" />
          AI-Composed Melodies
        </button>
      </div>
    </div>
  );
}

export default Home;
