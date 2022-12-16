import React, { useState } from 'react'
import './Stories.css'
import {story_data,company,certificate_approved} from './StoryDetails.js'
// import { useNavigate } from 'react-router-dom'
import Register from '../Register/Register'




const Stories = () => {
    const [registerPopup,setRegisterPopup]=useState(false)
    // const navigate=useNavigate();

    // const registerHandleClick=()=>{
    //     navigate("/register")
    // }
  return (
    <>
    <div className="story" id='story'>

<h3 className="s-title">
Success Stories
</h3>


<h2 className='s-title2'>
    Our grads work at some of the top tech companies
    </h2>
    <div className="companies">
        <div className="c-slider">
            <div className="c-sliderTrack">
{company.map((item)=>(
       <div className="company" key={item.id}>
       <img src={item.image} alt="company" />
   </div>
)) }

         
               
            </div>
        </div>
    </div>

{/* success stories */}
<div className="s-stories">
    <div className="story-slider">
        <div className="story-slideTracker">
         {story_data.map((item,index)=>(
    <div className="story-card bg" key={index}>
    <div className="story-title">
        <h4 className="story-title1">Education</h4>
        <h3 className="story-title2">Graduate To Professional</h3>
        <h4 className='story-title3'>Batch {item.batch}</h4>
    </div>

    <div className="s-body">
     
<img src={item.img} alt="students" />

<div className="s-rightBody">
<h3 className="std-name">{item.name}</h3>
<div className="s-rightSubBody">
<div className="s-rightSubBody1">
<span className="std-branch">{item.branch}</span>
<span className="edu-code">{item.code}</span>
</div>
<div className="s-rightSubBody2">
<p className="std-address">{item.place}</p>
{/* <span className="std-anotherCode">ekdt2020</span> */}
</div>
</div>
<h3 className="package">{item.package}LPA</h3>
<h4 className="role">{item.role}</h4>
</div>
    </div>
</div>
         ))}
        
        </div>
    </div>
</div>


{/* brochure and register */}
<div className="br">
<div className="register">
<h1 className="br-title1">You will get a job!</h1>
<h2 className="br-title2">Register now and start your professional career</h2>
<button className="br-btn" onClick={()=>setRegisterPopup(true)}>Register Now</button> 



</div>
<div className="brochure">
<h1 className="br-title1">Download course brochure</h1>
<h2 className="br-title2">Everything you need to know is here</h2>
<button className="br-btn" >Download Now</button>
</div>
<Register registerPopup={registerPopup} closeRegisterPopup={()=> setRegisterPopup(false)} />
</div>




{/* our certificate */}

<div className="our-certificate">
    <h2 className="oc-title">We are certified by international bodies and Government of India</h2>
    <div className="certificate-approve">
    

        {certificate_approved.map((item)=>(
 <div className="ac-images" key={item.id}>
 <img src={item.image} alt="approved images" />
</div>
        )) }
    
    </div>
    
</div>

    </div>
    </>
  )
}

export default Stories