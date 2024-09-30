import React from 'react';
import '../styles/TimerProgress.css'; 

const ProgressBarComponent = ({ seconds }) => {
  const percentage = (seconds / 59) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBarComponent;
