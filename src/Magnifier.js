import React, { useState, useEffect } from 'react';

function Magnifier() {
    const [isActive, setIsActive] = useState(false);
    const [lastClickedImg, setLastClickedImg] = useState(null);

    useEffect(() => {
        const handleImgClick = (e) => {
            if (!isActive) return; // Only interact if magnifier is active

            // Reset the last clicked image scale if it exists
            if (lastClickedImg) {
                lastClickedImg.style.transform = 'scale(1)';
            }

            // Set the new image as the last clicked and magnify it
            setLastClickedImg(e.target);
            e.target.style.transform = 'scale(1.5)';
        };

        // Add click event listeners to all images if magnifier is active
        if (isActive) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('click', handleImgClick);
            });
        }

        return () => {
            // Cleanup: remove event listeners and reset any magnified image
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.removeEventListener('click', handleImgClick);
            });
            if (lastClickedImg) {
                lastClickedImg.style.transform = 'scale(1)';
            }
        };
    }, [isActive, lastClickedImg]);

    const toggleMagnifier = () => {
        setIsActive(!isActive);
    };

    return (
        <button onClick={toggleMagnifier}>
            {isActive ? 'Disable Magnifier' : 'Enable Magnifier'}
        </button>
    );
}

export default Magnifier;
