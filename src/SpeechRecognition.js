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

        const commands = ["video", "beat","magnify", "font", "read", "navigate", "stem", "home", "visual", "melody", "original", "bass", "drums", "vocals", "other"];
        const audioControlCommands = ["original", "bass", "drums", "vocals", "other","beat"]; // Commands that control audio
        const currentTimestamp = Date.now();

        for (let cmd of commands) {
            if (transcript.includes(cmd) && (lastCommandRef.current.command !== cmd || currentTimestamp - lastCommandRef.current.timestamp > 1000)) {
                if (audioControlCommands.includes(cmd)) {
                    // If the command is for controlling audio, play/pause the audio instead of clicking a button
                    const audioElement = document.getElementById(`${cmd}-audio`);
                    if (audioElement) {
                        if (audioElement.paused) {
                            audioElement.play();
                        } else {
                            audioElement.pause();
                        }
                    }
                } else {
                    // For other commands, simulate a button click
                    document.getElementById(`${cmd}-button`).click();
                }
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
