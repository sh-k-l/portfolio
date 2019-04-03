import React from 'react';

export default () => (
  <div className="section contact">
    <h2>Contact</h2>
    <div className="contact-wrapper">
      <div>
        <form action="https://formspree.io/address@email.tld" method="POST">
          <input type="text" name="name"/>
          <input type="email" name="_replyto"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
      <div>
      
      </div>
    </div>
  </div>
);