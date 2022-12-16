import React from 'react'
import './Team1.css'
import { teamData } from './TeamData'
import ScrollToTop from "react-scroll-to-top";

const Team = () => {
  return (
    <>
    <div id="team" className="team">
    <ScrollToTop smooth top="20" />
        <h2 className="team-title">Our Team Members</h2>
        <div className="team-members">
          {teamData.map((item)=>(
       <div className="single-member" key={item.id}>
       <div className="team-img">
        <div className="img">
         <img src={item.img} alt="member img" />
         </div>
         <div className="member-social">
         <i className='fab fa-facebook-f icon'></i>
<i className='fab fa-instagram icon'></i>
<i className='fab fa-twitter icon'></i>
<i className='fab fa-youtube icon'></i>
         </div>
       </div>
       <div className="member-details">
        <h3 className="member-name">{item.name}</h3>
        <p className="member-role">{item.role} </p>
       </div>
     </div>
          )

          )}
   
        </div>
    </div>
    </>
  )
}

export default Team