import React from 'react';
import './AccessibilityToolbar.css';
import Magnifier from './Magnifier';
import FontSizeSlider from './FontSizeSlider';
import ScreenReader from './ScreenReader'; // Import the new ScreenReader component

function AccessibilityToolbar() {
    return (
        <div className="accessibility-toolbar">
            <Magnifier />
            <FontSizeSlider />
            <ScreenReader />
        </div>
    );
}

export default AccessibilityToolbar;
