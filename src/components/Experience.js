import React from 'react';

export default () => (
  <div className="section experience-wrapper" id="experience">
    <h2>Experience & Education</h2>

    <div className="experience">
      <div className="experience-info">
        <h3>Tonbridge & Malling Borough Council</h3>
        <h4>Digital Developer <span className="light-text-color">July 2018 - July 2019</span></h4>
        <p className="experience-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
      </div>
      <img alt="Tonbridge and Malling Borough Councilt" src="/images/tmbc.jpeg"/>
    </div>

    <div className="experience">
      <div className="experience-info">
        <h3>BSc Computer Science <span className="italic light-text-color">with a year in industry</span></h3>
        <p>University of Kent - Graduating Summer 2020</p>
        <p>Grade: <span className="light-text-color">TBC</span></p>
      </div>
      <img alt="University of Kent" src="/images/ukc.jpg"/>
    </div>
  </div>
)