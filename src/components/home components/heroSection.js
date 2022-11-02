import React from 'react';
import Alfa from '../../images/Alfacare (7).jpg'
import Alfa1 from '../../images/Alfacare (6).jpg'
import Alfa2 from '../../images/Alfacare (4).jpg'
import './heroSection.css'

const HeroSection = () => {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column', alignItems:'center', textAlign:'center'}} >
      <div style={{ borderBottom:'4rem'}} className='heroText'>
        <h2 >ALFACARE</h2>
        <h3>Help & Care Organization</h3>
        <p>Alfacare is an independent, non-profit making. Non-government organisations (NGO) that is committed to the peaceful co-existence of the people of Nigeria.</p>
        </div>
       <div> <button className='btn btn-empty'>Our Activities</button>
             <button className='btn btn-full'>Contact Us</button></div>
    </div>
    <div className='heroimageDiv'>
      <div className='imageDiv'><img src={Alfa1}  width="100%" alt='trial' className='image'/></div>
      <div className='image1Div'><img src={Alfa}  width="100%" alt='trial' className='image1'/></div>
      <div className='imageDiv'><img src={Alfa2}  width="100%" alt='trial' className='image'/></div>
    </div>
    </>
  );
}

export default HeroSection;
