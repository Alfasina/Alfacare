import React,{useRef, useEffect} from 'react';

const ChoiceCard = ({icon,heading, paragraph,id}) => {
 
  const innerRef=useRef(null)
  const options={threshold:0.25}
  useEffect(()=> {
      
    const observer= new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('bounce')
        }
        else{
          entry.target.classList.remove('bounce')
        }
      })
      
    },[options])
    observer.observe(innerRef.current)
}) 
  return (
    <div className='choiceCard' ref={innerRef}>
        <div className='iconDiv'>{icon}</div>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div>
  );
}

export default ChoiceCard;
