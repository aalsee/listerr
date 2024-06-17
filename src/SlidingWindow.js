import React from 'react';
import './SlidingWindow.css';

function SlidingWindow({ isOpen, onClose, children }) {
  return (
    <div className={`sliding-window ${isOpen ? 'open' : ''}`}>
      <div className="sliding-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default SlidingWindow;
