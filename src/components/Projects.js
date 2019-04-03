import React, {Component} from 'react';

import PROJECTS_LIST from '../PROJECTS_LIST';

const Project = (props) => { 
  return(
    <div className="project">
      <div className="project-image-wrapper">
        <img className="project-image" src={"/images/"+props.image} alt={"Image of "+props.title}/>
        <div className="project-links">
          {props.code ? <a href={props.code}>Code</a> : null} 
          {props.demo ? <a href={props.demo}>Demo</a> : null} 
          
        </div>
      </div>

      <div className="project-details">
        <p className="project-tags">{props.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description.length < 140 ? props.description : props.description.substring(0,140) +"..."}</p>
      </div>
    </div>
  )
}

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      allTags: [...new Set(PROJECTS_LIST.map(p => [...p.tags]).flat())], //Get all tag arrays, flatten and remove duplicates
      selectedTags:["Frontend"]
    }
    this.handleTagClick = this.handleTagClick.bind(this);  
  }


  handleTagClick = (e) => {
    const tag = e.currentTarget.innerHTML;
    let newSelectedTags = [...this.state.selectedTags];
    const index = newSelectedTags.indexOf(tag);

    if(index !== -1){
      newSelectedTags = newSelectedTags.slice(0, index).concat(newSelectedTags.slice(index + 1, newSelectedTags.length));
    }else{
      newSelectedTags.push(tag);
    }

    this.setState({
      selectedTags: newSelectedTags
    });
  }

  render(){
    const pList = PROJECTS_LIST.map(p => {
      if(p.tags.some(tag => this.state.selectedTags.includes(tag))){
        return <Project key={p.title} {...p}/>;
      }
      return null;
    });    

    const tags = this.state.allTags.map((t, i) => ( 
      <li key={i} className={(this.state.selectedTags.indexOf(t) !== -1? "selected" : "")}
      onClick={this.handleTagClick}>{t}</li>));

    return (      
      <div className="section projects-wrapper"  id="portfolio">
        <h2>Portfolio</h2>
        <ul className="projects-sort-tags"><li><span>Sort by:</span></li> {this.state.allTags.length === 0 ? <li>No tags found</li> : tags}</ul>
        {pList}
      </div>
    );
  }
}

export default Projects;