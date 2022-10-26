import React from 'react';
import Alfa from '../../images/Alfacare 1.jpg'
import './heroSection.css'

const HeroSection = () => {
  return (
    <>
    <div>
        <h3>ALFACARE: Help and Care</h3>
        <p>Alfacare is an independent, non-profit making. Non-government organisations (NGO) that is committed to the peaceful co-existence of the people of Nigeria.</p>
       <div> <button className='btn btn-empty'>Our Activities</button>
             <button className='btn btn-full'>Contact Us</button></div>
    </div>
    <div className='heroimageDiv'>
      <div className='imageDiv'><img src={Alfa}  width="100%" alt='trial' className='image'/></div>
      <div className='image1Div'><img src={Alfa}  width="100%" alt='trial' className='image1'/></div>
      <div className='imageDiv'><img src={Alfa}  width="100%" alt='trial' className='image'/></div>
    </div>
    </>
  );
}

export default HeroSection;
