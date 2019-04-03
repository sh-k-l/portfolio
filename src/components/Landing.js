import React from 'react';
import { Link } from 'react-scroll';
import Sticky from 'react-sticky-el';

const ListList = (props) => (
  <li className="hover-underline-animation">      
    <Link activeClass="active" to={props.to} spy={true} smooth={true} offset={-100} duration={1000} delay={0}>
      {props.to}
    </Link>
  </li>
);


export default () => (
  <div className="landing">
    <h1 className="etched-text">Shakil <br/>Choudhury</h1>
 
  
    <Sticky holderCmp={'nav'}>
    <div className="nav-wrapper">
      <ul>
        <ListList to="portfolio"/>
        <ListList to="experience"/>
        <ListList to="about"/>
        <ListList to="contact"/>
      </ul>
    </div>
    </Sticky>
  </div>
  
)