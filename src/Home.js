import React from 'react';
import './App.css'; // Importing the CSS file for styling

function Home() {
  return (
    <div className="column-container">
      <h1>AI-assisted Music Accessibility</h1>
      <p class="quote-body">Without music, life would be a mistake. </p>
      <p class="quote-author">Friedrich Nietzche </p>
<p class ="content">Artificial Intelligence has revolutionized society
in a number of ways. One area where this change is especially noticable
is in art, and specifically music. Artists are using AI in a number of ways
to create novel music.</p>

<p class ="content">However, not many discuss the intersection of AI with music-accessibility. AI has
already demonstrated several ways that it will make music, from listening to creation, able to be 
thorougly enjoyed by more people.</p>

<p class ="content">Choose a technology below to start learning!</p>
      <div className="buttons-row">
        <button>Stem Splitters</button>
        <button>Lyrics to Sign Langage</button>
        <button>AI-Composed Melodies</button>
      </div>
    </div>
  );
}

export default Home;
