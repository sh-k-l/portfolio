import React from 'react';
import { Link } from 'react-scroll';
import Sticky from 'react-sticky-el';
import Fade from 'react-reveal/Fade';

const ListList = (props) => (
  <li className="hover-underline-animation">      
    <Link activeClass="active" to={props.to} spy={true} smooth={true} offset={-100} duration={1000} delay={0}>
      {props.to}
    </Link>
  </li>
);


export default () => (
  <header>    
    <div className="header-text-wrapper">
      <Fade up>
      <h1>Shakil <br/>Choudhury</h1> 
      </Fade>
    </div>
    <Sticky holderCmp={'nav'}>
    <div className="nav-wrapper">
    <Fade left>
      <ul>
        <ListList to="portfolio"/>
        <ListList to="experience"/>
        <ListList to="about"/>
        <ListList to="contact"/>
      </ul>
    </Fade> 
    </div>
    </Sticky>
  </header>
  
)