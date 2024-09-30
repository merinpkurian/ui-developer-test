import React, { useState, useEffect } from 'react';
import ProgressBarComponent from './ProgressBarComponent'; 
import '../styles/TimerProgress.css'; 

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev < 59 ? prev + 1 : 0)); 
    }, 1000); 
    return () => clearInterval(timer);
  }, []);

  const handleReset = () => {
    setSeconds(0);  // Reset seconds to 0 when button is clicked
  };

  const displayTime = `14:${seconds < 10 ? `0${seconds}` : seconds}`; 

  return (
    <div className="timer-container">
      <div className="timer">{displayTime}</div>
      <ProgressBarComponent seconds={seconds} />
      {/* Add Reset Button */}
      <button className="reset-button" onClick={handleReset}>Reset Timer</button>
    </div>
  );
};

export default TimerComponent;
