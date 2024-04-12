import React from 'react';
import './AccessibilityToolbar.css'; // Ensure your CSS is correctly linked
import Magnifier from './Magnifier';
import FontSizeSlider from './FontSizeSlider';
import ScreenReader from './ScreenReader'; // Import the ScreenReader component
import CrosshairNavigation from './CrosshairNavigation';  // Import the CrosshairNavigation component

function AccessibilityToolbar() {
    return (
        <div className="accessibility-toolbar">
            <Magnifier />
            <FontSizeSlider />
            <ScreenReader />
            <CrosshairNavigation />
            <div className="navigation-instructions">
                Press 'Q' to activate and use the one-click navigation.
            </div>
        </div>
    );
}

export default AccessibilityToolbar;
