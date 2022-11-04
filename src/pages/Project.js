import React,{useRef,useEffect, useState} from 'react';
import {projectData} from './projectData';
import './project.css'
const Project = () => {
  const [isVisible, setIsVisible]=useState(false)
  const ref=useRef(null)
  const innerRef=useRef(null)
  let options={
    root:ref.current,
    threshold:0.5,
    rootMargin:'0px'
  }
  const intersectingFxn=entries=>{
    const {entry}=entries
    setIsVisible(true)
  }
  useEffect(()=>{
    const observer=new IntersectionObserver(intersectingFxn,options)
    observer.observe(innerRef.current)
  },[options])
   
  
  return (
    <div>
      <ul className='timelineCon' ref={ref}>
        {projectData.map((project)=>{
        const{date, topic, Sponsor}=project
       
        return <li key={date} className='timeline' ref={innerRef}>
          <div style={{ display:`${!isVisible && 'none' }`}}> musa</div>
            <div className='time'>
            <div><p>Duration:{date}</p></div><div><p> Partner:{Sponsor}</p></div>
            </div>
            <div className='topic'><h3>{topic.toUpperCase()}</h3></div>
        </li> })}
        
        
    </ul>  

      
    </div>
  );
}

export default Project;
