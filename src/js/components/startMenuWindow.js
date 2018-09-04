import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

import { closeStartMenuWindow } from '../actions/start_menu_actions';

class StartMenuWindow extends Component{

  constructor(props){
    super(props);

    this.unmountMe = this.unmountMe.bind(this);
  }
  unmountMe(){
    this.props.dispatch(
      closeStartMenuWindow({})
    )
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
          <div className="application-container window-container start-menu-container">
              <div className="window-title-bar">
                  {this.props.startMenu.label}
                  <div className="x" onClick={this.unmountMe}>x</div>
              </div>
              <div 
              dangerouslySetInnerHTML={{__html: this.props.startMenu.content}} />
          </div>
      </Draggable>
      )
  }
}

function mapStateToProps(applicationState){
  let { startMenu } = applicationState;
  if(!startMenu.showStartMenuWindow)
    startMenu.showStartMenuWindow = false;
  return { startMenu };
}

export default connect(mapStateToProps)(StartMenuWindow);