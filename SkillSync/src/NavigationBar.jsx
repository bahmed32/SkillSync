import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const NavigationBar = () => {
  return (
    <div className="header">
      <div className="icon">
        <FontAwesomeIcon icon={faHandHoldingHand} size="2x" color="#333" />
      </div>
      <h1>SkillSync</h1>
    </div>
  );
};

export default NavigationBar;
