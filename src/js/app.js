import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createClass from 'create-react-class';

import StartUpScreen from './components/startUpScreen';
import Desktop from './components/desktop';
import TaskBar from './components/taskbar';

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