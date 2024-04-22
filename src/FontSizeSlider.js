import React, { useState } from 'react';

function FontSizeSlider() {
    const [fontSize, setFontSize] = useState(16); // Default font size in pixels
    const [isActive, setIsActive] = useState(false); // To toggle visibility of the slider

    const handleFontSizeChange = (event) => {
        const newSize = event.target.value;
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}px`;
    };

    return (
        <div>
            <button id="font-button" onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Close Font Size' : 'Font Size'}
            </button>
            {isActive && (
                <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    style={{ marginLeft: '10px' }}
                />
            )}
        </div>
    );
}

export default FontSizeSlider;
