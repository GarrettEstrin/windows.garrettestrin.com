import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

import { closeIconWindow } from '../actions/icon_actions';

class IconWindow extends Component {
  constructor(props){
    super (props);

    this.closeIconWindow = this.closeIconWindow.bind(this);
  }
  closeIconWindow(){
    this.props.dispatch(closeIconWindow({}))
  }

  handleDrag(e, ui){
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }
  render(){
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};    
    return (
    <Draggable handle=".window-title-bar" {...dragHandlers}>
      <div className="window-container">
          <div className="window-title-bar">
          {this.props.projectTitle}
          <div className="x" onClick={this.closeIconWindow}>x</div>
          </div>
          <h1>{this.props.projectTitle}</h1>
          <h5>{this.props.projectSubtitle}</h5> 
          <div className="window-body"> 
          <h4>{this.props.projectDescription}</h4>
          <div className={this.props.projectThumbnail}></div>
          </div>
          <div className="btns-container">
          <a href={this.props.projectViewLink} target="_blank">
              <button className="btn btn-project">View Project</button>
          </a>
          <a href={this.props.projectCodeLink} target="_blank">
              <button className="btn btn-github">View Project Code</button>
          </a>
          <hr />
          <button className="btn btn-close" onClick={this.closeIconWindow}>Close</button>
          </div>
      </div>
    </Draggable>
    )
  }
}

function mapStateToProps(applicationState){
  let { icon } = applicationState;
  return { icon };
}

export default connect(mapStateToProps)(IconWindow);