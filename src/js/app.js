import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createClass from 'create-react-class';

import StartUpScreen from './components/startUpScreen';
import Desktop from './components/desktop';

class EntryApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      startUpMounted: true
    }

    this.handleStartUpScreenUnmount = this.handleStartUpScreenUnmount.bind(this);
  }

  handleStartUpScreenUnmount(){
    this.setState({startUpMounted: false});
  }
  render() {
    return (
      <div class="main-container">
        { this.state.startUpMounted ? <StartUpScreen unmountMe={this.handleStartUpScreenUnmount}/> : null }
        <Desktop />
        {/* 
            <div class="window" id="window"></div>
            <div class="taskbar">
              <div id="start" class="startRest" onclick="window.toggleShow('start-menu'), window.toggleShow('start-menu-overlay')">Start</div>
              <div class="notifications text">
                  <div class="notification-icon"></div>
                  <div class="time" id="time" onload="startTime()"></div>
              </div>
            </div>
            <div class="start-menu-overlay" id="start-menu-overlay" onclick="window.toggleShow('start-menu'), window.toggleShow('start-menu-overlay')"></div>
              <div class="start-menu" id="start-menu">
                <div class="start-logo"></div>
                <div class="start-menu-items">
                  <ul>
                    <li id="startMenu1"></li>
                    <li id="startMenu2"></li>
                    <li id="startMenu3"></li>
                    <li id="startMenu4"></li>
                    <li id="startMenu5"></li>
                  </ul>
                </div>
              </div>*/}
      </div>
    )
  }
}

ReactDOM.render(
  <EntryApp />,
  document.getElementById('app')
)