import React from 'react';
import './AccessibilityToolbar.css';
import Magnifier from './Magnifier';
import FontSizeSlider from './FontSizeSlider'; // Import the new FontSizeSlider component

function AccessibilityToolbar() {
    return (
        <div className="accessibility-toolbar">
            <Magnifier />
            <FontSizeSlider />
        </div>
    );
}

export default AccessibilityToolbar;
