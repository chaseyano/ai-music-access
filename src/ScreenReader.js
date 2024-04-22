import React, { useState, useEffect } from 'react';

function ScreenReader() {
    const [isActive, setIsActive] = useState(false);
    const synth = window.speechSynthesis; // Get the speechSynthesis instance from the window

    useEffect(() => {
        const readContent = (event) => {
            if (!isActive) return;

            event.preventDefault(); // Prevent default click actions
            const text = event.target.innerText || event.target.alt || 'No readable content';

            // Stop current speech before saying new content
            if (synth.speaking) {
                synth.cancel();
            }

            speak(text);
        };

        if (isActive) {
            document.addEventListener('click', readContent);
        } else {
            document.removeEventListener('click', readContent);
        }

        return () => {
            document.removeEventListener('click', readContent);
        };
    }, [isActive, synth]);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };

    return (
        <button id="read-button" onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Deactivate Screen Reader' : 'Activate Screen Reader'}
        </button>
    );
}

export default ScreenReader;
