import React from 'react'
import { Link } from 'react-scroll'
import Sticky from 'react-sticky-el'
import Fade from 'react-reveal/Fade'

const ListNode = (props) => (
  <li className="hover-underline-animation">
    <Link
      activeClass="active"
      to={props.to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
      delay={0}
    >
      {props.to}
    </Link>
  </li>
)

export default () => (
  <header>
    <div className="header-text-wrapper">
      <Fade down>
        <h1>
          Shakil <br />
          Choudhury
        </h1>
      </Fade>
    </div>
    <Sticky holderCmp={'nav'}>
      <div className="nav-wrapper">
        <Fade up>
          <ul>
            <ListNode to="portfolio" />
            <ListNode to="about" />
            <ListNode to="experience" />            
            <ListNode to="contact" />
          </ul>
        </Fade>
      </div>
    </Sticky>
  </header>
)
