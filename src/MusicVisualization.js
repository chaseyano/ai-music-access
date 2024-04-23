import React, { useEffect } from 'react';
import './lessons.css';
import AccessibilityToolbar from './AccessibilityToolbar';

function MusicVisualization() {
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
                <h1>Exploring AI Music Visualization</h1>
                <p>AI music visualization is a complex field that combines signal processing, machine learning, and visual arts to create dynamic representations of music. It translates audio signals into visual data, allowing for a more immersive experience in music listening and performance.</p>
                <img src="https://wzrd.ai/static/67b83272a88c1a322fe82f0887e4025e/0a45a/divine_1024x1024.jpg" alt="A 3-by-3 grid of WZRD.AI stills" />

                <h2>Key Algorithms and Techniques</h2>
                <p>At the core of music visualization are several algorithms that analyze different aspects of music:
                    <ul>
                        <li><strong>Fourier Transforms:</strong> Used to decompose a musical piece into its frequency components. This helps in identifying the various pitches and tones within a track.</li>
                        <li><strong>Spectral Analysis:</strong> Focuses on visualizing the spectrum of frequencies in a song over time, providing insights into the harmony and dynamics.</li>
                        <li><strong>Beat Detection Algorithms:</strong> These algorithms identify the tempo and rhythm by analyzing the timing of beats within the music, crucial for synchronizing visuals with the music's pace.</li>
                        <li><strong>Machine Learning:</strong> Neural networks and deep learning models can learn from a vast array of music types and generate corresponding visual patterns that evolve with the music.</li>
                    </ul>
                </p>

                <h2>Applications in Performance and Accessibility</h2>
                <p>Music visualization is not just an enhancement for live performances; it also makes music more accessible. By converting audio cues into visual data, it provides an alternative sensory experience for the deaf and hard of hearing community.</p>
                <img src="https://wzrd.ai/static/f3c15342bd3a6f75387b9f0777b77328/0a45a/patterns_512x512.jpg" alt="A 3-by-3 grid of WZRD.AI stills" />

                <h2>Video Demonstration</h2>
                <p>This video demonstration showcases the real-time processing of music into engaging visual forms, illustrating the direct impact and capabilities of AI music visualization technology.</p>
                <iframe
                    className = "centered-video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vhZQB1VYlnA?rel=0&cc_load_policy=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>

                <h2>Technical Challenges</h2>
                <p>Developing effective music visualization systems involves challenges like real-time data processing and creating visually appealing yet informative representations. The complexity increases with the need to adapt to different music genres and styles dynamically.</p>

                <h2>Conclusion</h2>
                <p>AI music visualization is a promising area that bridges technology and art, enhancing not only the aesthetic enjoyment of music but also its accessibility. As technology advances, the potential for innovative applications continues to expand.</p>
            </div>
            <AccessibilityToolbar />
        </>
    );
}

export default MusicVisualization;
