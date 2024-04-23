import React, { useState, useEffect } from 'react';
import './AccessibilityToolbar.css';

function CrosshairNavigation() {
    const [horizPos, setHorizPos] = useState(0); // Initialize horizontal position
    const [vertPos, setVertPos] = useState(0); // Initialize vertical position
    const [mode, setMode] = useState(0); // 0: inactive, 1: moving horizontal, 2: moving vertical

    useEffect(() => {
        let intervalId = null;

        if (mode === 1) {
            // Horizontal movement
            intervalId = setInterval(() => {
                setHorizPos(pos => (pos + 2) % window.innerHeight); // Reduce increment to 2 pixels
            }, 20); // Increase interval to 20 milliseconds
        } else if (mode === 2) {
            // Vertical movement
            intervalId = setInterval(() => {
                setVertPos(pos => (pos + 2) % window.innerWidth); // Reduce increment to 2 pixels
            }, 20); // Increase interval to 20 milliseconds
        }

        return () => clearInterval(intervalId); // Clean up interval on unmount or mode change
    }, [mode]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'q' || event.key === 'Q') {
                setMode(prevMode => (prevMode + 1) % 3); // Cycle through the modes
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        // Trigger click when both lines are set and mode returns to inactive
        if (mode === 0 && horizPos !== -1 && vertPos !== -1) {
            const clickPoint = document.elementFromPoint(vertPos, horizPos);
            if (clickPoint) {
                clickPoint.click();  // Simulate the click event
                console.log('Click at:', vertPos, horizPos);  // Log the click position for debugging
            }
            // Reset positions after the click
            setHorizPos(0);
            setVertPos(0);
        }
    }, [mode, horizPos, vertPos]);

    return (
        <div>
            {mode >= 1 && <div className="horizontal-line" style={{ top: `${horizPos}px` }}></div>}
            {mode >= 2 && <div className="vertical-line" style={{ left: `${vertPos}px` }}></div>}
        </div>
    );
}

export default CrosshairNavigation;
