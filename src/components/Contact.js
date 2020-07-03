import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

export default () => {
  const [showPhone, setShowPhone] = useState(false)

  const togglePhone = () => setShowPhone(!showPhone)

  return (
    <div className="section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-wrapper">
        <Fade right>
          <div className="contact-form-wrapper">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input name="bot-field" className="hidden" />
              <div>
                <label htmlFor="name">Your Name:</label>
                <input required type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <input required type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea required name="message" id="message"></textarea>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit">Send</button>
            </form>
          </div>
        </Fade>
        <div className="contact-details">
          <Fade left>
            <div className="contact-node">
              <div className="icon-holder">
                <i className="fa fa-envelope fa"></i>
              </div>{' '}
              <a href="mailto:shakilchyy@gmail.com">shakilchyy@gmail.com</a>
            </div>
            <div
              className="contact-node"
              onMouseEnter={togglePhone}
              onMouseLeave={togglePhone}
            >
              <div className="icon-holder">
                <i className="fa fa-phone"></i>
              </div>{' '}
              {showPhone ? '07449772760' : 'Hover to show #'}
            </div>
            <div className="contact-node">
              <div className="icon-holder">
                <i className="fa fa-linkedin"></i>
              </div>{' '}
              <a href="https://www.linkedin.com/in/shakil-choudhury-06b308145/">
                Shakil Choudhury
              </a>
            </div>
            <div className="contact-node">
              <div className="icon-holder">
                <i className="fa fa-github"></i>
              </div>{' '}
              <a href="https://github.com/sh-k-l">sh-k-l</a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
