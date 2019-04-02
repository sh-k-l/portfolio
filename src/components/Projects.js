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
      return null;
    });    

    const tags = this.state.allTags.map((t, i) => ( 
      <li key={i} className={(this.state.selectedTags.indexOf(t) !== -1? "selected" : "")}
      onClick={this.handleTagClick}>{t}</li>));

    return (      
      <div className="section projects-wrapper">
        <h2>Projects</h2>
        <ul className="projects-tags"><li><span>Sort by:</span></li> {this.state.allTags.length === 0 ? <li>No tags found</li> : tags}</ul>
        {pList}
      </div>
    );
  }
}

export default Projects;