import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Error = () => {
  return (
    <div>
      <img src={logo} alt='Alfacare logo sppinning' className='spinImg'/>
      <h4>Page Does Not Exist </h4>
     <Link to='/' ><button className='btn'> Back to HomePage</button></Link>
    </div>
  );
}

export default Error;
