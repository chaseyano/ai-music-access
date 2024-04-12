// Magnifier.js
import React, { useEffect } from 'react';

function Magnifier() {
    useEffect(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.style.transform = 'scale(1.25)';
        });

        return () => {
            images.forEach(img => {
                img.style.transform = 'scale(1)';
            });
        };
    }, []);

    return null; // Since this component doesn't need to render anything
}

export default Magnifier;
