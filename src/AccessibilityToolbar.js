import React, { useState } from 'react';
import './AccessibilityToolbar.css';
import Magnifier from './Magnifier'; // Make sure this is correctly imported

function AccessibilityToolbar() {
    const [showMagnifier, setShowMagnifier] = useState(false);

    return (
        <div className="accessibility-toolbar">
            <button onClick={() => setShowMagnifier(!showMagnifier)}>
                {showMagnifier ? 'Disable Magnifier' : 'Enable Magnifier'}
            </button>
            {showMagnifier && <Magnifier />}
        </div>
    );
}

export default AccessibilityToolbar;
