import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const SpeechRecognitionContext = createContext();

export function SpeechRecognitionProvider({ children }) {
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            handleCommand(transcript.toLowerCase().trim());
        };

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const handleCommand = (transcript) => {
        console.log("Heard:", transcript); // Log the full transcript for debugging

        const commands = ["video", "beat", "magnify", "font", "read", "navigate", "stem", "home", "visual", "melody", "original", "bass", "drums", "vocals", "other", "up", "down"];
        const audioControlCommands = ["original", "bass", "drums", "vocals", "other", "beat"];

        for (let cmd of commands) {
            if (transcript.includes(cmd)) {
                switch (cmd) {
                    case 'up':
                        window.scrollBy(0, -100); // Scrolls up by 100 pixels
                        break;
                    case 'down':
                        window.scrollBy(0, 100); // Scrolls down by 100 pixels
                        break;
                    default:
                        if (audioControlCommands.includes(cmd)) {
                            const audioElement = document.getElementById(`${cmd}-audio`);
                            if (audioElement) {
                                if (audioElement.paused) {
                                    audioElement.play();
                                } else {
                                    audioElement.pause();
                                }
                            }
                        } else {
                            document.getElementById(`${cmd}-button`).click();
                        }
                        break;
                }
            }
        }
    };

    const toggleListening = () => {
        setListening(prev => {
            if (prev) {
                recognitionRef.current.stop();
            } else {
                recognitionRef.current.start();
            }
            return !prev;
        });
    };

    return (
        <SpeechRecognitionContext.Provider value={{ listening, toggleListening }}>
            {children}
        </SpeechRecognitionContext.Provider>
    );
}

export function useSpeechRecognition() {
    return useContext(SpeechRecognitionContext);
}
