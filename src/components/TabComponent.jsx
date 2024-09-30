import React, { useState, useEffect } from 'react';
import '../styles/TabComponent.css';
import HeadingSection from './HeadingSection';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width for responsiveness

  const tabs = ['HR Manager', 'Line Manager', 'Employee'];

  const cards = [
    {
      title: "HR Manager",
      content: [
        "Handle employee information digitally on our user-friendly platform. With automation, accuracy is guaranteed for reliable record-keeping.",
        "Simplify onboarding, capture essential employee data and automate payroll for seamless employee experiences.",
        "Facilitate company-wide communication, keeping everyone in the loop with important announcements, subsidiary changes, and HR policy updates."
      ],
      style: "card1",
    },
    {
      title: "Line Manager",
      content: [
        "Simplify task management for a boost in team productivity. Clear assignments, monitored deadlines, and smoother workflows await!",
        "Welcome new team members with ease – our automated workflows minimize admin hassle for quick integration into team dynamics.",
        "Keep the team engaged and informed on project milestones, fostering a positive, motivated environment for collaborative success."
      ],
      style: "card2",
    },
    {
      title: "Employee",
      content: [
        "Get clarity on tasks, access key information and perform tasks independently, fostering a culture of trust and ownership.",
        "Experience a pain-free onboarding experience with timely and accurate payroll processes – a positive start to your new role!",
        "Stay connected with real-time updates, polls, and surveys through our HRMS for an engaging and informed experience."
      ],
      style: "card3",
    },
  ];

  let switchTimer;

  useEffect(() => {
    startAutoSwitch();
    return () => clearTimeout(switchTimer);
  }, [activeTab]);

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width state on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startAutoSwitch = () => {
    switchTimer = setTimeout(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); // 5 seconds
  };

  const manualSwitch = (index) => {
    clearTimeout(switchTimer);
    setActiveTab(index);
    startAutoSwitch();
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => manualSwitch(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.style} ${activeTab === index ? 'active' : ''}`}
          >
            <div className={`card-content ${activeTab === index ? 'visible' : 'hidden'}`}>
              {card.content.map((point, idx) => (
                <div key={idx} className="card-box">
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
