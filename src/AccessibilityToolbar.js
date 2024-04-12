import React from 'react';
import './AccessibilityToolbar.css'; // Make sure to create this CSS file

function AccessibilityToolbar() {
  return (
    <div className="accessibility-toolbar">
      <button onClick={() => alert('Magnifier activated!')}>
        Magnifier
      </button>
    </div>
  );
}

export default AccessibilityToolbar;
