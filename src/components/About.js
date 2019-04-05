import React from 'react';
import Fade from 'react-reveal/Fade';

export default () => (
  <div className="section" id="about">
    <h2>About Me</h2>
    <Fade right>
    <div className="about-wrapper">
      <div className="placeholder-img"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales finibus arcu non iaculis. Phasellus orci est, tincidunt quis tempus in, volutpat ac enim. Nulla facilisis efficitur neque non lobortis. Phasellus fermentum vitae augue vel dapibus. Aliquam blandit urna convallis facilisis suscipit. Nam in consectetur nulla, ac vehicula turpis. </p>
    </div>
    </Fade>
  </div>
);