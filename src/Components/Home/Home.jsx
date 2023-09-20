import React, { useState } from 'react'
import './Home1.css'
// import {NavLink} from 'react-router-dom'
// import Logo from './Logo/Logo'
// import Navbar from './Navbar/Navbar'


import {Link} from 'react-scroll'

const Home = () => {
  const [click,setClick]=useState(false)
  return (
  <>
  {/* <Logo/> */}
  {/* <Navbar/> */}
  <div className="home" id='home'>

 
<div className='logo'>

<div className='title'>
<h1>STUDYMATE</h1>
<span>PERSONALIZED EDUCATION & LEARNING</span>
</div>

<div className='social'>
<i className='fab fa-facebook-f icon'></i>
<i className='fab fa-instagram icon'></i>
<i className='fab fa-twitter icon'></i>
<i className='fab fa-youtube icon'></i>
</div>
</div>




<div className='navbar'>
      <nav className='flex-items'>
        <ul className={click?"mobile-nav":" flex-items"} onClick={()=>setClick(false)} >
        <li><Link  to='home' span={true}   smooth={true}  > Home  </Link></li>
         
          <li><Link  to='benefits' span={true}   smooth={true}  > Benefits  </Link></li>
          <li><Link  to='story' span={true}   smooth={true}  > Success Stories  </Link></li>
      
          <li><Link  to='courses' span={true}   smooth={true}  > All Courses  </Link></li>
          <li><Link  to='price' span={true}   smooth={true}  > Package & Pricing  </Link></li>
        
          <li><Link  to='team' span={true}   smooth={true}  > Our Team  </Link></li>
          <li><Link  to='contact' span={true}   smooth={true}  > Contact  </Link></li>
         
        
        </ul>
        <div className="certificate">
          <div className="certificateBtn">GET CERTIFICATE</div>
        </div>
        <button className="toggle" onClick={()=>setClick(!click)}>
      {click ? <i className='fa fa-times bars'></i>: <i className='fa fa-bars bras'></i> }
    </button>
  
 </nav>
    </div>

    <div className="container">
       <div className="left-hero">
<h3>WEL COME TO EDUCATION</h3>
<h2>Best Online Education Expertise..</h2>
<p>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today”</p>

<div className="hero-btn">
    <button className='hbtn1 hbtn'>
      Get Started  <i className='fa fa-long-arrow-alt-right'></i>
    </button>
    <button className='hbtn2 hbtn'>
      View Courses  <i className='fa fa-long-arrow-alt-right'></i>
    </button>
</div>
       </div>

      

    </div>
  </div>
  </>
  )
}

export default Home
