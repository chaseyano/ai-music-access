import React, { useState, useEffect } from 'react';
import './AccessibilityToolbar.css';

function CrosshairNavigation() {
    const [horizPos, setHorizPos] = useState(-1); // Start off-screen
    const [vertPos, setVertPos] = useState(-1);
    const [mode, setMode] = useState(0); // 0: inactive, 1: moving horizontal, 2: moving vertical, 3: reset

    useEffect(() => {
        let intervalId = null;

        if (mode === 1 && horizPos === -1) {
            // Initialize horizontal position at the top
            setHorizPos(0);
        }
        if (mode === 2 && vertPos === -1) {
            // Initialize vertical position at the left
            setVertPos(0);
        }

        if (mode === 1) {
            // Horizontal movement
            intervalId = setInterval(() => {
                setHorizPos(pos => {
                    if (pos < window.innerHeight) {
                        return pos + 1;
                    } else {
                        clearInterval(intervalId);
                        return pos;
                    }
                });
            }, 10);
        } else if (mode === 2) {
            // Vertical movement
            intervalId = setInterval(() => {
                setVertPos(pos => {
                    if (pos < window.innerWidth) {
                        return pos + 1;
                    } else {
                        clearInterval(intervalId);
                        return pos;
                    }
                });
            }, 10);
        }

        return () => clearInterval(intervalId);
    }, [mode, horizPos, vertPos]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'q' || event.key === 'Q') {
                switch (mode) {
                    case 0:
                        setMode(1); // Activate horizontal movement
                        break;
                    case 1:
                        setMode(2); // Switch to vertical movement after horizontal completes
                        break;
                    case 2:
                        setMode(0); // Reset after vertical completes
                        setHorizPos(-1);
                        setVertPos(-1);
                        break;
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [mode]);

    return (
        <div>
            {mode >= 1 && <div className="horizontal-line" style={{ top: `${horizPos}px` }}></div>}
            {mode >= 2 && <div className="vertical-line" style={{ left: `${vertPos}px` }}></div>}
        </div>
    );
}

export default CrosshairNavigation;
