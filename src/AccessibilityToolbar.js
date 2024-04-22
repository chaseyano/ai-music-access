import React from 'react';
import './AccessibilityToolbar.css';
import Magnifier from './Magnifier';
import FontSizeSlider from './FontSizeSlider';
import ScreenReader from './ScreenReader';
import CrosshairNavigation from './CrosshairNavigation';
import SpeechRecognitionButton from './SpeechRecognition'; // Import the new component

function AccessibilityToolbar() {
    return (
        <div className="accessibility-toolbar">
            <Magnifier />
            <FontSizeSlider />
            <ScreenReader />
            <CrosshairNavigation />
            <SpeechRecognitionButton />
            <div className="navigation-instructions">
                Press 'Q' to activate and use the one-click navigation.
            </div>
        </div>
    );
}

export default AccessibilityToolbar;
