import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    <div className='dm-blog'>
      <div className='dm-blog-heading'>
        <h1 className='dm-blog-heading'>A lot is happening, <br /> We are blogging about it.</h1>
      </div> <br/><br/>
      <div className='dm-blog-container'>
        <div className='dm-blog-container-left'>
         <img src='https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog01.png?raw=true' className='blog-1'/>
         <h3 className='blog-1-h3'>DM-creative and Open  AI is the future. Let us exlore how it is?</h3>
         </div>
         <div className='dm-blog-container-right'>

          <div className='col-2'>
          <img src='https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog02.png?raw=true' className='blog-2'/>
          <h3 className='blog-2-h3'>DM-creative and Open  AI is the future. Let us exlore how it is?</h3><br/>

          <img src='https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog03.png?raw=true' className='blog-2'/>
          <h3 className='blog-2-h3'>DM-creative and Open  AI is the future. Let us exlore how it is?</h3>
          </div>

          <div className='col-3'>
          <img src='https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog04.png?raw=true' className='blog-3'/>
          <h3 className='blog-3-h3'>DM-creative and Open  AI is the future. Let us exlore how it is?</h3><br/>
          
          <img src='https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog05.png?raw=true' className='blog-3'/>
          <h3 className='blog-3-h3'>DM-creative and Open  AI is the future. Let us exlore how it is?</h3>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Blog