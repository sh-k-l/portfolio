import React, {Component} from 'react';
import Project from './Project';

import PROJECTS_LIST from '../PROJECTS_LIST';

import "./Projects.scss";


class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      allTags: [...new Set(PROJECTS_LIST.map(p => [...p.tags]).flat())], //Get all tag arrays, flatten and remove duplicates
      selectedTags:["Frontend"]
    }
    this.handleTagClick = this.handleTagClick.bind(this);  
    console.log(PROJECTS_LIST)
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
      if(this.state.selectedTags.length === 0 || p.tags.some(tag => this.state.selectedTags.includes(tag))){
        return <Project key={p.title} {...p}/>;
      }
    });    

    const tags = this.state.allTags.map(t => ( 
      <span className={(this.state.selectedTags.indexOf(t) !== -1? "selected" : "")}
      onClick={this.handleTagClick}>{t}</span>));

    return (      
      <div className="projects-wrapper">
        <h2>Projects</h2>
        <p className="projects-tags">Sort by: {this.state.allTags.length === 0 ? "No tags found" : tags}</p>
        {pList}
      </div>
    );
  }
}

export default Projects;