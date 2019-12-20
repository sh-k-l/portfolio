import React from 'react'
import Fade from 'react-reveal/Fade'

export default () => (
  <div className="section" id="about">
    <h2>About Me</h2>
    <Fade right>
      <div className="about-wrapper">
        <img src="/images/self.jpg" alt="" />
        <p>
          Hi, I’m Shakil! I think hard and work harder. I enjoy solving problems and being challenged, so I’m looking to embark on a career in software development upon completion of my BSc in Computer Science.
          <br/> In my downtime I enjoy playing online video games with friends, watching football and reading books.        
        </p>
      </div>
    </Fade>
  </div>
)
