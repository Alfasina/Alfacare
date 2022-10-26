import React from 'react';
import Choice from './home components/Choice';
import HeroSection from './home components/heroSection';


  
const Home = () => {
    
  
  return (
    <>
    <div className='firstDiv'>
    <HeroSection/>
    </div>
    <div>
        <Choice />
    </div>
      
    </>
  );
}

export default Home;
