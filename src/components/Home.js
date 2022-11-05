import React from 'react';
import Choice from './home components/Choice';
import HeroSection from './home components/heroSection';
import ProjectCard from './home components/ProjectCard';
import Alfaa  from '../images/Alfacare (4).jpg'
import Alfa  from '../images/Alfacare (6).jpg'
import Almajiri  from '../images/almajiri.jpg'
import './home components/ProjectCard.css'
import ceedart from '../images/ceedart.png'


const partners= [ceedart,'https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_the_United_States_Agency_for_International_Development.svg','https://chicagosinfonietta.org/wp-content/uploads/2016/02/MacArthur-logo.png','https://cdn.vanguardngr.com/wp-content/uploads/2019/11/UNICEF.png','https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/UK_Government_logos_2012_-_UK_AID.jpeg/452px-UK_Government_logos_2012_-_UK_AID.jpeg']

const imagediv=[{image:Almajiri, description:'mo]jfaijorajinaksniuornkdniuq', id:0, title:'Almajiri Confrence'},
{image:Alfaa, description:'Orphan and Vulnerable Children', id:2, title:'Orphan and Vulnerable Children'},
{image:Alfaa, description:'Orphan and Vulnerable Children', id:3, title:'Girl Child'},
{image:Alfa, description:'hau;d', id:4, title:'ihd;U'},
{image:Alfa, description:'JhjoiAEFHIioh', id:5, title:'h GAEYUF  IHEfudaihi'},
{image:Alfaa, description:'JhjoiAEFHIioh', id:6, title:'h GAEYUF  IHEfudaihi'},
]

const Home = () => {

  return (
    <div className='homediv' style={{ boxSizing: 'border-box'}}>
      
    <div >
    <HeroSection/>
    </div>
    <div>
        <Choice />
    </div>
    
    <div>
      <h2>OUR RECENT PROJECTS</h2>
      <div className='projcardContainer' >
        {imagediv.map((proj)=><ProjectCard key={proj.id} {...proj}/>)}
      </div>
    </div>
    <div>
      <h2> Our Partners</h2>
      <div  style={{display:'flex', justifyContent:'center',alignItems:'center', flexGrow:'grow',gap:'10px'}}>
        {partners.map((partner, index)=><img key={index} src={partner} width='17%' alt='partners logo'/>)}
      </div>
    </div>
    </div>
  );
}

export default Home;
