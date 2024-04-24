import React, { useEffect } from 'react';
import './lessons.css';
import AccessibilityToolbar from './AccessibilityToolbar';

function AiComposedMusic() {
    useEffect(() => {
        // Add the 'body-lesson' class to body on mount
        document.body.classList.add('body-lesson');
    
        // Clean up by removing the class on unmount
        return () => {
          document.body.classList.remove('body-lesson');
        };
    }, []);

    return (
        <>
            <div className="lesson-container">
                <h1>AI Composed Music for Enhanced Musical Creativity</h1>
                <p>AI is revolutionizing the entire process of music production, from composing melodies to creating full beats, making it accessible to people of all abilities. By automating various aspects of music creation, AI enables broader participation in music-making, especially for those facing barriers due to physical or cognitive limitations.</p>
                
                <h2>Algorithmic Foundations of AI Music Production</h2>
                <p>AI music production systems utilize advanced algorithms to generate comprehensive musical compositions:
                    <ul>
                        <li><strong>LSTM Networks:</strong> Great for capturing time-series data, LSTMs remember long input sequences crucial for generating complex beats and melodies, adapting to various musical styles.</li>
                        <li><strong>Transformer Networks:</strong> By treating music production as a language translation task, transformers can create music that translates artistic intent into musical expressions, managing complex sequences over extended periods.</li>
                    </ul>
                </p>
                <img src="http://www.youredm.com/wp-content/uploads/2014/02/Robot-DJ-Tom-Toonami.jpg" alt="3d render of a robot performing a DJ set." />

                <h2>Accessibility in AI-Driven Music Production</h2>
                <p>AI-generated music tools are designed to be user-friendly, allowing individuals with varying levels of physical mobility and cognitive ability to create complex compositions. These tools often include:
                    <ul>
                        <li><strong>Customizable Interfaces:</strong> Adaptable user interfaces that can be tailored to individual needs, including voice-activated features, single-switch access for users with limited mobility, and simplified control schemes for those with cognitive impairments.</li>
                        <li><strong>Creative Assistance:</strong> AI can suggest melodies and beats based on user input, reducing the need for extensive musical training and allowing users to focus more on creative expression rather than technical skills.</li>
                    </ul>
                </p>
                
                <h2>Example of AI-Composed Music</h2>
                <p>Here is an example where the AI was tasked with creating a Detroit style trap beat with blown out 808s, bells, an aggressive piano melody, and overall energetic composition:</p>
                <div className="code-example">
                    <pre><code>Prompt: {"Create a Detroit style trap beat. Blown out 808s. Bells. Aggressive. Piano melody."}</code></pre>
                </div>
                <p>Output:</p>
                <div className="output-placeholder">
                    <p>The resulting track, can be heard below. This beat was created on the platform <a href="https://create.musicfy.lol/create/text-to-music" target="_blank" rel="noopener noreferrer">Musicfy</a>.</p>
                    <audio controls id="beat-audio">
                        <source src="/tracks/beat.wav" type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                <h2>Conclusion</h2>
                <p>Through sophisticated algorithms, AI is democratizing music production, enabling individuals with diverse abilities to participate in and innovate within the musical arts. This technology not only expands creative possibilities but also opens up new avenues for personal expression and enjoyment.</p>
            </div>
            <AccessibilityToolbar />
        </>
    );
}

export default AiComposedMusic;
