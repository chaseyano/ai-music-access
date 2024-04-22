import React, { useState } from 'react';

function SpeechRecognitionButton() {
    const [listening, setListening] = useState(false);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Set the properties for the speech recognition
    recognition.continuous = true; // Continuous recognition
    recognition.interimResults = true; // Result can change as more speech is recognized
    recognition.lang = 'en-US'; // Language of the speech recognition

    // Handle the start of the recognition process
    const startListening = () => {
        recognition.start();
        setListening(true);
        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                                    .map(result => result[0])
                                    .map(result => result.transcript)
                                    .join('');
            console.log(transcript);
        };
    };

    // Handle the end of the recognition process
    const stopListening = () => {
        recognition.stop();
        setListening(false);
    };

    // Toggle listening state
    const toggleListening = () => {
        if (listening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return (
        <button onClick={toggleListening}>
            {listening ? 'Stop Listening' : 'Start Listening'}
        </button>
    );
}

export default SpeechRecognitionButton;
