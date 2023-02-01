import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='dm-footer'>
      <div className='dm-footer-heading'>
        <h1 className='dm-footer-text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='dm-footer-btn'>
       <p>Request Early Access</p>
      </div>
      <div className='dm-footer-links'>
        <div className='dm-footer-links_logo'>
        <img src='https://t4.ftcdn.net/jpg/04/24/06/09/360_F_424060986_TMKnB5xn3duDHVUOzGnBGGD83VFP2a1L.jpg'/>
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className='dm-footer-links-div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
        </div>

        <div className='dm-footer-links-div'>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        </div>
 
        <div className='dm-footer-links-div'>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
        </div>

        <div className='dm-footer-copyright'>
        <p>@2021 GPT-3. All rights reserved.</p></div>
      </div>
    </div>
  )
}

export default Footer