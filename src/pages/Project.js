import React,{useRef,useEffect} from 'react';
import {projectData} from './projectData';
import './project.css'
import { Helmet } from 'react-helmet';
const Project = () => {

  const innerRef=useRef(null)
  let options={
    threshold:0.5,
  }
  const intersectingFxn=entries=>{
    entries.forEach(entry => {
      
      if (entry.isIntersecting){
        entry.target.classList.add('bounce')
        console.log(entry.target.classList)
      }
      else{
        console.log('Not intersecting')
      }
    });
   
  }
  useEffect(()=>{
    const observer=new IntersectionObserver(intersectingFxn,options)
    observer.observe(innerRef.current)
  })
   useEffect(
    ()=>{
      <Helmet>
      <meta charSet="utf-8" />
      <title>Project| Alfacare</title>
      </Helmet>
    },[]
   )
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
                <title>Project| Alfacare</title>
      </Helmet>
      
      <ul className='timelineCon'>
        {projectData.map((project)=>{
        const{date, topic, Sponsor}=project
       
        return <li key={date} className={`timeline`} >
            <div className='time' ref={innerRef}>
            <div><p>Duration:  <span>{date}</span></p></div><div><p> Partner:  <span>{Sponsor}</span></p></div>
            </div>
            <div className='topic'><h3>{topic.toUpperCase()}</h3></div>
        </li> })}
        
        
    </ul>  

      
    </div>
  );
}

export default Project;
