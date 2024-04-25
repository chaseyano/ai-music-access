import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AccessibilityToolbar.css';
import Magnifier from './Magnifier';
import FontSizeSlider from './FontSizeSlider';
import ScreenReader from './ScreenReader';
import CrosshairNavigation from './CrosshairNavigation';
import SpeechRecognitionButton from './SpeechRecognition'; // Import the new component


function AccessibilityToolbar() {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <div className="accessibility-toolbar">
            <button id="home-button" onClick={() => navigate('/')} className="home-button">Home</button> {/* Home button to navigate to the root */}
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
