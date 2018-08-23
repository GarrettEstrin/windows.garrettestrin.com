import React, { Component } from 'react';

class StartMenu extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
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
      </div>
    )
  }
}

export default StartMenu;