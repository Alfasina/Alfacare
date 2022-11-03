import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ChoiceCard = ({icon,heading, paragraph,id}) => {
  /* let navigate =useNavigate(); */
  //const short=paragraph.split(' ').slice(0, 30).join(' ')
  return (
    <div className='choiceCard' /* onClick={async(e)=>{
      let card=await createCard(e.target);
      navigate(`/capacities/${card.paragraph}`)
    }} */>
      
      <Link to={`capacities/${heading}`}>
        <div className='iconDiv'>{icon}</div>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        </Link>
    </div>
  );
}

export default ChoiceCard;
