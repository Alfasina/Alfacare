import React from 'react';
import { useParams } from 'react-router-dom';
import { capacities } from './Choice';

const ChoiceDetails = () => {
    const {parags}=useParams()
    const capacity=capacities.find((capacit)=>capacit.heading===parags)
    const {heading, paragraph}=capacity
  return (
    <div>
      <h2>{heading}</h2> 
      <p>{paragraph}</p>
    </div>
  );
}

export default ChoiceDetails;
