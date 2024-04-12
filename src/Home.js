import React from 'react';
import './App.css'; // Importing the CSS file for styling


function Home() {
  return (
    <div className="column-container">
      <h1>AI-assisted Music Accessibility</h1>
      <p class="quote-body">Without music, life would be a mistake.</p>
      <p class="quote-author">Friedrich Nietzche</p>
      <p class="content">Artificial Intelligence has revolutionized society
      in a number of ways. One area where this change is especially noticeable
      is in art, and specifically music. Artists are using AI in a number of ways
      to create novel music.</p>

      <p class="content">However, not many discuss the intersection of AI with music-accessibility. AI has
      already demonstrated several ways that it will make music, from listening to creation, able to be
      thoroughly enjoyed by more people.</p>

      <p class="content">Choose a technology below to start learning!</p>
      <div className="buttons-row">
        <button>
          <img src={'https://vocalremover.org/img/splitter/player_en.png'} alt="Stem Splitter technology" />
          Stem Splitters
        </button>
        <button>
          <img src={'https://wzrd.ai/static/67b83272a88c1a322fe82f0887e4025e/0a45a/divine_1024x1024.jpg'} alt="Lyrics to Sign Language technology" />
          AI Music Visualization
        </button>
        <button>
          <img src={'https://miro.medium.com/v2/resize:fit:1200/1*62DW4EnILgAVkpw4UQwECg.png'} alt="AI Composed Melodies technology" />
          AI-Composed Melodies
        </button>
      </div>
    </div>
  );
}

export default Home;
