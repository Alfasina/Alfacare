import React from 'react';

const ChoiceCard = ({icon,heading, paragraph}) => {
  return (
    <div className='choiceCard'>
        <div className='iconDiv'>{icon}</div>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div>
  );
}

export default ChoiceCard;
