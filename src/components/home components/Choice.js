import React ,{useState, useRef,useEffect}  from 'react';

import './choice.css'
import ChoiceCard from './choiceCard';
import {GiPeaceDove} from "react-icons/gi";
import {SiRoamresearch} from "react-icons/si";
import {FaChild,FaHandsHelping} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Choice = () => {
  
  const { Ref:innerRef, inView:isVisible} = useInView();
/*   
    useEffect(()=> {
        
        const observer= new IntersectionObserver((entries)=>{
          
          entries.map((entry)=>{console.log('entry',entry)})
        })
        observer.observe(innerRef.current)
    },[]) */
    const capacities=[{icon:<GiPeaceDove/>, heading:'Conflict Resolution',paragraph:' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {icon:<FaChild/>, heading:'ORPHAN AND VULNERABLE CHILDREN',paragraph:' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {icon:<FaHandsHelping/>, heading:'HELP AND CARE',paragraph:' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {icon:<SiRoamresearch/>, heading:'RESEARCH AND TRAINING',paragraph:' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}]
  return (
    <>
      <h3 ref={innerRef}>Our Capacities{isVisible ? 'visible':'not Visible'}</h3>
      <p>lhygvysbvailu uidbavoyif ugafyiuiu idsiupavcu; nio[afsviu b;uDGIU;;hwfavsyg jasbfpyibvu;q</p>
      <div className='choiceCardDiv' >
        {capacities.map((capacity,index)=><ChoiceCard key={index} {...capacity}/>)}
      </div>
    </>
  );
}

export default Choice;
