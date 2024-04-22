import React, { useState, useRef } from 'react';

function SpeechRecognitionButton() {
    const [listening, setListening] = useState(false);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    // Ref to store the last command and its timestamp
    const lastCommandRef = useRef({ command: null, timestamp: Date.now() });

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }

        handleCommand(transcript.toLowerCase().trim());
    };

    const handleCommand = (transcript) => {
        console.log("Heard:", transcript); // Log the full transcript for debugging

        const commands = ["magnify", "font", "read", "navigate"];
        const currentTimestamp = Date.now();
        for (let cmd of commands) {
            if (transcript.includes(cmd) && (lastCommandRef.current.command !== cmd || currentTimestamp - lastCommandRef.current.timestamp > 1000)) {
                document.getElementById(`${cmd}-button`).click();
                lastCommandRef.current = { command: cmd, timestamp: currentTimestamp };
                break; // Exit loop after the first match to prevent multiple commands
            }
        }
    };

    const toggleListening = () => {
        if (listening) {
            recognition.stop();
            setListening(false);
        } else {
            recognition.start();
            setListening(true);
        }
    };

    return (
        <button onClick={toggleListening}>
            {listening ? 'Stop Listening' : 'Start Listening'}
        </button>
    );
}

export default SpeechRecognitionButton;
