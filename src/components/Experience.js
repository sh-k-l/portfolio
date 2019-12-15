import React from 'react'
import Fade from 'react-reveal/Fade'

export default () => (
  <div className="section experience-wrapper" id="experience">
    <h2>Experience & Education</h2>
    <Fade left>
      <div className="experience">
        <div className="experience-info">
          <h3>Tonbridge & Malling Borough Council</h3>
          <h4>
            Digital Developer{' '}
            <span className="light-text-color">July 2018 - July 2019</span>
          </h4>
          <ul className="experience-description">
            <li>
              Liaised with council service teams to discuss requirements and
              agree objectives before designing and developing solutions.
            </li>
            <li>
              Used the ArcGIS JavaScript API to produce and maintain map
              interfaces used externally and internally at TMBC.
            </li>
            <li>
              Worked with Squiz Matrix, the council’s Content Management System
              of choice.
            </li>
            <li>
              Redesigned document templates in the council’s bespoke admin
              software (Idox Uniform) to save paper use.
            </li>
          </ul>
        </div>
        <img
          alt="Tonbridge and Malling Borough Councilt"
          src="/images/tmbc.jpeg"
        />
      </div>

      <div className="experience">
        <div className="experience-info">
          <h3>
            BSc Computer Science{' '}
            <span className="italic light-text-color">
              with a year in industry
            </span>
          </h3>
          <p>University of Kent - Graduating Summer 2020</p>
          <p>
            Grade: <span className="light-text-color">TBC</span>
          </p>
        </div>
        <img alt="University of Kent" src="/images/ukc.jpg" />
      </div>
    </Fade>
  </div>
)
