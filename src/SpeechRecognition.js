import React from 'react';
import { useSpeechRecognition } from './SpeechRecognitionContext';  // Make sure the path is correct

function SpeechRecognitionButton() {
    const { listening, toggleListening } = useSpeechRecognition();

    return (
        <button onClick={toggleListening}>
            {listening ? 'Stop Listening' : 'Start Listening'}
        </button>
    );
}

export default SpeechRecognitionButton;

