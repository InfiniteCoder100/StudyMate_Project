import React from 'react'
import './Contact.css'

const Contact = () => {
  const map='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.52528105278!2d77.5963159!3d12.93140115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670951563770!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

  

  return (
    <>
    <div className="contact" id="contact">
      
     
<div className="contact-container">
  <div className="map">
<iframe src={map} />
  </div>
  <div className="contact-details">
<h2 className="contact-title">Contact us</h2>
<p className="contact-desc">We're Open For Any Suggestion or Just To Have A Chat..</p>
<div className="contact-address">

  <div className="c-location ca">
    <h4 className="cd-title">ADDRESS :</h4>
    <p className="cd-desc">Daneshwari Nagadr Vidyagiri Dharwad 580004</p>
  </div>

  <div className="c-email ca" >
    <h4 className="cd-title">EMAIL :</h4>
    <p className="cd-desc">sharangadagi@gmail.com</p>
  </div>

  <div className="c-phone ca ">
    <h4 className="cd-title">PHONE :</h4>
    <p className="cd-desc">+918971078420</p>
  </div>

</div>

<form action="">
<div className="c-form1">
  <input type="text"  placeholder='Enter Your Name'/>
  <input type="text"  placeholder='Enter Your Email'/>
</div>
<input type="text" placeholder='Subject' className='cf-subject' /> <br />
<textarea name="" id="" cols="30" rows="10" placeholder='Create Message Here.....'></textarea><br />
<button className='c-btn'>Send Message</button>

</form>
  </div>
</div>

    </div>
    </>
  )
}

export default Contact