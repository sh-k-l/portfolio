import React from 'react';

export default () => (
  <div className="section" id="contact">
    <h2>Contact Me</h2>
    <div className="contact-wrapper">
      <div className="contact-form-wrapper">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit">Send</button>

        </form>
      </div>
      <div className="contact-details">
        <div className="contact-node"><div className="icon-holder"><i className="fa fa-envelope fa"></i></div> <a href="mailto:shakilchyy@gmail.com">shakilchyy@gmail.com</a></div>
        <div className="contact-node"><div className="icon-holder"><i className="fa fa-phone"></i></div> 07449772760</div>
        <div className="contact-node"><div className="icon-holder"><i className="fa fa-linkedin"></i></div> <a href="#">Shakil Choudhury</a></div>
        <div className="contact-node"><div className="icon-holder"><i className="fa fa-github"></i></div> <a href="https://github.com/sh-k-l">sh-k-l</a></div>
      </div>
    </div>
  </div>
);