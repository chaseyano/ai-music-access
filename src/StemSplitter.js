import React, { useEffect } from 'react';
import './lessons.css';
import AccessibilityToolbar from './AccessibilityToolbar';

function StemSplitter() {
    useEffect(() => {
        // Add the 'body-lesson' class to body on mount
        document.body.classList.add('body-lesson');

        // Clean up by removing the class on unmount
        return () => document.body.classList.remove('body-lesson');
    }, []);

    const tracks = ['orig', 'bass', 'drums', 'vocals', 'other'];
    const trackFiles = tracks.map(track => `/tracks/${track}.wav`);

    return (
        <>
            <div className="lesson-container">
                <h1>Understanding AI Stem Splitting Technology</h1>
                <p>Artificial Intelligence (AI) has paved the way for numerous advancements across various fields, and one intriguing application is the "stem splitting" technology. Stem splitting generally involves breaking down a complex audio signal into its constituent parts or "stems." These stems typically include separate tracks for vocals, bass, drums, and other instruments. This technology utilizes sophisticated machine learning algorithms to analyze and segregate sounds that are typically mixed together.</p>
                <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg" alt="Graphic of audio waveform splitting into layers" />

                <h2>How AI Stem Splitting Works</h2>
                <p>The process begins with an AI analyzing the composite waveform of a piece of music. Using algorithms based on neural networks, the AI learns to identify the characteristic patterns of various instruments and vocals within a mixed track. Once these patterns are identified, the AI can then isolate and extract each element with remarkable precision. The output is a set of individual tracks, each containing a specific element of the original mix, which can be independently manipulated or studied.</p>
                <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg" alt="Illustration of waveform dividing into separate tracks" />

                <h2>Applications in Music Production</h2>
                <p>In music production, stem splitting is revolutionary because it allows producers and audio engineers to remix old songs, enhance the quality of individual tracks, or create new music from pre-existing recordings. For example, a producer can extract vocal tracks from a vintage song and seamlessly integrate them into a modern track with completely different instrumentals.</p>
                <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg" alt="Digital music production setup" />

                <h2>Stem Splitting for Accessibility</h2>
                <p>Beyond music production, AI stem splitting technology holds significant potential for enhancing accessibility. For individuals with hearing impairments, AI can tailor music or other audio content to enhance frequencies or elements that they can hear more clearly. Furthermore, this technology can be used in real-time communication tools to isolate speech from background noise, helping people with auditory processing disorders to understand conversations better in noisy environments.</p>
                <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg" alt="App interface for enhancing audio tracks" />

                <h2>Stem Splitting Example</h2>
                <p>Below is an example of AI stem splitting applied to an original audio track. You can see the original track followed by its separated stems, each playable independently.</p>
                <div className="audio-container">
                    {trackFiles.map((file, index) => (
                        <div key={index}>
                            <h3>{tracks[index].charAt(0).toUpperCase() + tracks[index].slice(1)} Track</h3>
                            <audio controls src={file}>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    ))}
                </div>

                <h2>Conclusion</h2>
                <p>AI stem splitting technology is not just transforming the way we interact with music but also how we can tailor auditory experiences to meet diverse needs. This capability to dissect and reassemble sounds holds promise for creating more inclusive and personalized audio environments, making technology more accessible and enjoyable for all.</p>
                <img src="http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg" alt="Collage of diverse individuals using audio technology" />
            </div>
            <AccessibilityToolbar />
        </>
    );
}

export default StemSplitter;
