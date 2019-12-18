import React from 'react'
import Fade from 'react-reveal/Fade'

export default () => (
  <div className="section" id="about">
    <h2>About Me</h2>
    <Fade right>
      <div className="about-wrapper">
        <img src="/images/self.jpg" alt="" />
        <p>
        A logical individual with a passion for software development pursuing a challenging career in the computer science field.  A hard worker with great organisational skills and self-motivation. Currently a third year student studying for a BSc in Computer Science (with a year in industry) at the University of Kent.{' '}
        </p>
      </div>
    </Fade>
  </div>
)
