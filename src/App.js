import logo from './logo.svg';
import React, { useState } from 'react';
import TabComponent from './components/TabComponent';
import TimerComponent from './components/TimerComponent';
import ProgressBarComponent from './components/ProgressBarComponent';
import Navbar from './components/NavBar';
import HeadingSection from './components/HeadingSection';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  const updateSeconds = (seconds) => {
    setSeconds(seconds);
  };

  return (
    <div className="app">
      <Navbar/>
      <HeadingSection />
      <TabComponent />
      <TimerComponent onUpdate={updateSeconds} />
      {/* <ProgressBarComponent seconds={seconds} /> */}
    </div>
  );
};

export default App;
