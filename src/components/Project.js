import React, {Component} from 'react';

export default (props) => { 
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



// import React, {Component} from 'react';

// class Project extends Component{ 
//   constructor(props){
//     super(props);
//     this.state = {
//       isHoveredOn: false
//     }
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//   }

//   handleMouseHover = () => {
//     this.setState(this.toggleHoverState);
//   }

//   toggleHoverState(state) {
//     return {
//       isHoveredOn: !state.isHoveredOn
//     };
//   }
 
//   render(){

    

//     return(
//       <div className="project" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
//         <div className="project-image-wrapper">
//           <img className="project-image" src={"/images/"+this.props.image} alt={"Image of "+this.props.title}/>
//           <div className="project-links" style={{opacity: this.state.isHoveredOn ? 1 : 0}}>
//             {this.props.code ? <a href={this.props.code}>Code</a> : null} 
//             {this.props.demo ? <a href={this.props.demo}>Demo</a> : null} 
            
//           </div>
//         </div>

//         <div className="project-details">
//           <p className="project-tags">{this.props.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
//           <h3 className="project-title">{this.props.title}</h3>
//           <p className="project-description">{this.props.description.length < 140 ? this.props.description : this.props.description.substring(0,140) +"..."}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default Project;