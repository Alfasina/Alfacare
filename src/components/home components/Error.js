import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div className='firstDiv'>
      <Helmet>
      <meta charSet="utf-8" />
                <title>Error</title>
      </Helmet>
      <img src={logo} alt='Alfacare logo sppinning' className='pulse'/>
      <h4>Page Does Not Exist </h4>
     <Link to='/' ><button className='btn'> Back to HomePage</button></Link>
    </div>
  );
}

export default Error;
