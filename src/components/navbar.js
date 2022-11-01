import React, {useState, useEffect,useRef} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import logo from '../images/logo.png'



const Navbar = () => {
  const [toogle, setToogle]=useState(false)
  const toogleFunction=()=>setToogle(!toogle)
  const outerCon=useRef(null)
  const innerCon=useRef(null)
  useEffect(()=>{
    const height=innerCon.current.getBoundingClientRect().height
    if(toogle){
      outerCon.current.style.height=`${height}px`
    }
    else{
      outerCon.current.style.height='0px'
    }
  },[toogle])
  
  
  return (
<nav className='navbar-container'>
<div className='logoContainer' style={{margin:'4px'}}>
    <div style={{display:'flex'}}>
<img src={logo} width='30px' alt='logo' className='logoImg'/><h3>Help & Care</h3>
</div>

<button className='btn-Nav ' onClick={toogleFunction}>{!toogle ? <FaBars/>:<FaTimes/>}</button>

</div>

<div className='listContainer' ref={outerCon}>
  <ul ref={innerCon} className='lis'>
    <li ><Link to='/' className='nav-link'> Home </Link></li>
    <li ><Link to='/' className='nav-link'> Projects </Link></li>
    <li ><Link to='/' className='nav-link'> About</Link></li>
  </ul>
</div>
</nav>
  )
}

export default Navbar