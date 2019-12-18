import React from 'react'
import Fade from 'react-reveal/Fade'

import PROJECTS_LIST from '../PROJECTS_LIST'

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-image-wrapper">
        <img
          className="project-image"
          src={'/images/' + (props.image || "placeholder.png")}
          alt={'Image of ' + props.title}
        />
        <div className="project-links">
          {props.code ? <a href={props.code}>Code</a> : null}
          {props.demo ? <a href={props.demo}>Demo</a> : null}
        </div>
      </div>

      <div className="project-details">
        <p className="project-tags">
          {props.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  const pList = PROJECTS_LIST.map((p) => <Project key={p.title} {...p} />)

  return (
    <div className="section projects-wrapper" id="portfolio">
      <h2>Portfolio</h2>
      <Fade up>
        <div className="projects-list-wrapper">
          {pList.length > 0 ? (
            pList
          ) : (
            <h3 className="opaque center">No tags selected.</h3>
          )}
        </div>
      </Fade>
    </div>
  )
}

export default Projects
