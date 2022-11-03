import React ,{useState, useRef,useEffect}  from 'react';

import './choice.css'
import ChoiceCard from './choiceCard';
import {GiPeaceDove} from "react-icons/gi";
import {SiRoamresearch} from "react-icons/si";
import {FaChild,FaHandsHelping} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
export const capacities=[{icon:<GiPeaceDove/>, heading:'CONFLICT RESOLUTION',paragraph:' To enhance the enthronement of peace in every part of our society for the thriving of our democratic institution. Support our political set ups (These. includes Electoral officers, Elected members, political parties, e.t.c.) To see that we can attain our potential under a climate devoid of violence.'},
{icon:<FaChild/>, heading:'ORPHAN AND VULNERABLE CHILDREN',paragraph:' .Encourage gender issues in the realization of their potentials & responsibilities in-promoting peace for National development.Advocate with and for youths and minors on issues of concern like (HIV/AIDS, HEALTH, GOVT. POLICES, EDUCATION & CHILD BASE CONCERNS.'},
{icon:<FaHandsHelping/>, heading:'EDUCATION',paragraph:'Building capacity of youth in area of peace and income generation activities for the sustenance of peace. Train and educate youth to become members of peace corps in their society.'},
{icon:<SiRoamresearch/>, heading:'WORKSHOPS AND CAPACITY BUILDING',paragraph:'Alfa care shall be involved in organising peace inculcating workshops to targeted audience through which she will propagate peace. Alfa care would enhance capacities of youths both in management and technical skill, like income generating activities to keep them busy. '}]
const Choice = () => {
  
  const { Ref:innerRef, inView:isVisible} = useInView();
/*   
    useEffect(()=> {
        
        const observer= new IntersectionObserver((entries)=>{
          
          entries.map((entry)=>{console.log('entry',entry)})
        })
        observer.observe(innerRef.current)
    },[]) */
   
  return (
    <>
      <h2 ref={innerRef}>OUR CAPACITIES{/* isVisible ? 'visible':'not Visible' */}</h2>
      <p>Our expertise and Experience across the years can be broadly classified uder the following capacities </p>
      <div className='choiceCardDiv' >
        {capacities.map((capacity,index)=><ChoiceCard key={index} {...capacity}/>)}
      </div>
    </>
  );
}

export default Choice;
