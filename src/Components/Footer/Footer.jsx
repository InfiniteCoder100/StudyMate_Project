import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
  <>
  <section id="footer" className="footer-letter">
   <div className="footer1">
    <div className="f1-left">
        <h2 className='f1-heading'>Newsletter-Stay Tune get the latest Update</h2>
        <span className="f1-para">Far far away, behind the word Mountain..</span>
    </div>
    <div className="f1-right">
        <input type="text" placeholder='Enter Your Email' />
        <i className='fa fa-paper-plane'></i>
    </div>
   </div>
  </section>

  <footer>
    <div className="main-footer">
        <div className="f-box1">
            <h1 className="box1-title">STUDYMATE</h1>
            <span className="box1-desc">PERSONALIZED EDUCATION AND LEARNING</span>
            <p className='box1-desc2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus!</p>
            <div className="footer-social">
            <i className='fab fa-facebook-f icon'></i>
<i className='fab fa-instagram icon'></i>
<i className='fab fa-twitter icon'></i>
<i className='fab fa-youtube icon'></i>
</div>
        </div>

        <div className="box-explore">
          <h3 className="box-explore-heading">Explore</h3>
          <ul>
    
          <li><Link  to='benefits' span={true}   smooth={true}  > Benefits  </Link></li>
          <li><Link  to='story' span={true}   smooth={true}  > Success Stories  </Link></li>
      
       
        
          <li><Link  to='team' span={true}   smooth={true}  > Our Team  </Link></li>
          <li><Link  to='contact' span={true}   smooth={true}  > Contact  </Link></li>
          </ul>
        </div>

<div className="quick-link">
  <h3 className="q-link-title">Quick Links</h3>
  <ul>
          
          <li><Link  to='benefits' span={true}   smooth={true}  > Benefits  </Link></li>
          <li><Link  to='story' span={true}   smooth={true}  > Success Stories  </Link></li>
      
          <li><Link  to='courses' span={true}   smooth={true}  > All Courses  </Link></li>
          <li><Link  to='price' span={true}   smooth={true}  > Package & Pricing  </Link></li>
        
     
          </ul>
</div>

<div className="question">
  <h3 className="q-title">Have a Question?</h3>
  <ul>
    <li>
      <i className='fa fa-map'></i>
      Daneshwari Nagar 3rd Cross Vidyagiri Dharwad 580004
    </li>

    <li>
      <i className='fa fa-phone-alt'></i>
     +918971078420
    </li>

    <li>
    <i className='fa fa-paper-plane'></i>
   kundan773599@gmail.com
    </li>
   
    
  </ul>
</div>

    </div>
  </footer>

  <div className="legal">
    <p className="legal-desc">
      Copyright @2023 All rights reserved | This website is made with <i className='fa fa-heart'></i> by Team CodeSprit.
    </p>
  </div>
  </>
  )
}

export default Footer
