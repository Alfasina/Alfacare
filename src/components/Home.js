import React from 'react';
import Choice from './home components/Choice';
import HeroSection from './home components/heroSection';
import ProjectCard from './home components/ProjectCard';
import Alfaa  from '../images/Alfacare (4).jpg'
import Alfa  from '../images/Alfacare (6).jpg'
import Almajiri  from '../images/almajiri.jpg'
import './home components/ProjectCard.css'

const imagediv=[{image:Almajiri, description:'mo]jfaijorajinaksniuornkdniuq', id:0, title:'Almajiri Confrence'},
{image:Alfaa, description:'Orphan and Vulnerable Children', id:2, title:'Orphan and Vulnerable Children'},
{image:Alfaa, description:'Orphan and Vulnerable Children', id:3, title:'Girl Child'},
{image:Alfa, description:'hau;d', id:4, title:'ihd;U'},
{image:Alfa, description:'JhjoiAEFHIioh', id:5, title:'h GAEYUF  IHEfudaihi'},
{image:Alfaa, description:'JhjoiAEFHIioh', id:6, title:'h GAEYUF  IHEfudaihi'},
]

const Home = () => {

  return (
    <>
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
      <div></div>
    </div>
    </>
  );
}

export default Home;
