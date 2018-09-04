import React, { Component } from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { closeApplicationWindow } from '../actions/icon_actions';

class ApplicationWindow extends Component {
  constructor(props) {
   super(props);
  
   this.unmountMe = this.unmountMe.bind(this);
  }
  unmountMe(){
    this.props.dispatch(closeApplicationWindow({}));
  }
  handleDrag(e, ui) {
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
          <div className="application-container window-container">
              <div className="window-title-bar">
                  {this.props.projectTitle}
                  <div className="x" onClick={this.unmountMe}>x</div>
              </div>
              <iframe src={this.props.view} frameBorder="0"></iframe>
          </div>
      </Draggable>
      )
  }
}

function mapStateToProps({ icon }){
  if(!icon.showApplicationWindow)
    icon.showApplicationWindow = false;
  return { icon };
}

export default connect(mapStateToProps)(ApplicationWindow);