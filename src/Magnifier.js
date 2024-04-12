import React, { useState } from 'react';

function Magnifier() {
    const [isActive, setIsActive] = useState(false); // State to track whether the magnifier is active

    // Function to toggle the magnifier effect
    const toggleMagnifier = () => {
        setIsActive(!isActive);
        const images = document.querySelectorAll('img');
        const scaleValue = isActive ? 'scale(1)' : 'scale(1.5)';
        images.forEach(img => {
            img.style.transform = scaleValue;
        });
    };

    return (
        <button onClick={toggleMagnifier}>
            {isActive ? 'Disable Magnifier' : 'Enable Magnifier'}
        </button>
    );
}

export default Magnifier;
