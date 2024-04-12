import React, { useState, useEffect } from 'react';

function ScreenReader() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const readContent = (event) => {
            if (!isActive) return;
            
            event.preventDefault(); // Prevent default click actions
            const text = event.target.innerText || event.target.alt || 'No readable content';
            alert(`Screen Reader says: ${text}`); // This could use a more sophisticated method than alert
        };

        if (isActive) {
            document.addEventListener('click', readContent);
        } else {
            document.removeEventListener('click', readContent);
        }

        return () => {
            document.removeEventListener('click', readContent);
        };
    }, [isActive]);

    return (
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? 'Deactivate Screen Reader' : 'Activate Screen Reader'}
        </button>
    );
}

export default ScreenReader;
