import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='dm-header'>
      <div className='dm-header-content'>
         <h1 className='dm-header-content-text'>Let&apos;s Build Something <br/>Amazing DM CREATIVE OpenAI</h1> <br/>
         <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
      <div className='dm-header-content-input'>
       <input type="email" placeholder='Your Email Address' className='inputs-1' />
       <button type='button' className='inputs-2' >Get Started</button>
      </div>
      <div className='dm-header-content-people'>
        <img src='https://randomuser.me/api/portraits/women/17.jpg' className='imgs' alt='no-pic'  />
        <img src='https://randomuser.me/api/portraits/women/8.jpg' className='imgs' alt='no-pic'/>
        <img src='https://randomuser.me/api/portraits/men/54.jpg' className='imgs' alt='no-pic'/>
        <img src='https://randomuser.me/api/portraits/men/32.jpg' className='imgs' alt='no-pic'/>
        <p>+ 1,600 people requested access a visit in last 24 hours</p>
      </div>
      <div className='dm-header-img'>
       <img src='https://img.freepik.com/premium-vector/face-thinking-woman-created-low-poly-style-with-connected-lines-3d-vector-blue-wireframe-human-head-brain-exploding-which-symbolizes-intelligence-imagination_570429-15321.jpg?w=2000' alt='no-pic' className='robo-pic' />
      </div>
    </div>
  )
}

export default Header