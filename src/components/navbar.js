import React, {useState, useEffect,useRef} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'
import {MdClear} from 'react-icons/md'


const Navbar = () => {
  const [toogle, setToogle]=useState(false)
  const toogleFunction=()=>setToogle(!toogle)
  const outerCon=useRef(null)
  const innerCon=useRef(null)
  useEffect(()=>{
    const height=innerCon.current.getBoundingClientRect().height
    if(toogle){
      outerCon.current.style.height=`${height +10}px`
    }
    else{
      outerCon.current.style.height=0
    }
  },[toogle])
  
  
  return (
<div className='navbar-container'>
<div className='logoContainer'>
    <h4>
<img src='#' alt='logo' className='logoImg'/>Alfacare.Org</h4>

<button className='btn-Nav ' onClick={toogleFunction}>{!toogle ? <FaBars/>:<MdClear/>}</button>

</div>

<div className='listContainer' ref={outerCon}>
  <ul ref={innerCon} className='lis'>
    <li ><Link to='/' className='nav-link'> Home </Link></li>
    <li ><Link to='/' className='nav-link'> Projects </Link></li>
    <li ><Link to='/' className='nav-link'> About</Link></li>
  </ul>
</div>
</div>
  )
}

export default Navbar