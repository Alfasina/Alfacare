import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Project</Link>
        <Link to='/info'>Information for the Media</Link>
      </div>
      <div>
        <Link to='/about'>News & Event</Link>
        <Link to='/projects'>Videos</Link>
        <Link to='/info'>Contact Us</Link>
      </div>
      <div>
        <a href='mailto:alfacare.org@yahoo.com'><MdEmail/>alfacare.org@yahoo.com</a>
        <a href='tel:08037872467'> <FaPhone/>08037872467</a>
        <a href='https://maps.google.com/maps?q=kasuwan%20bacci%20round%20about%20kaduna&t=k&z=19&ie=UTF8&iwloc=&output=embed'><FaMapMarkerAlt/>Ah7 gamagira by Poly Round About, Kaduna, Kaduna Nigeria </a>
        <iframe id="gmap_canvas" title='gmap' src="https://maps.google.com/maps?q=kasuwan%20bacci%20round%20about%20kaduna&t=k&z=19&ie=UTF8&iwloc=&output=embed"  scrolling="no"></iframe>
    </div>
    </div>
  );
}


export default Footer;
