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
      <div class="contact-details">
        <p><i className="fa fa-envelope"></i> <a href="mailto:shakilchyy@gmail.com">shakilchyy@gmail.com</a></p>
        <p><i className="fa fa-phone"></i> 07449772760</p>
        <p><i className="fa fa-linkedin"></i> <a href="#">Shakil Choudhury</a></p>
        <p><i className="fa fa-github-square"></i> <a href="#">sh-k-l</a></p>
      </div>
    </div>
  </div>
);