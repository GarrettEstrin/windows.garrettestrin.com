import React, { Component } from 'react';

import StartMenuItem from './startMenuItem';
import startMenuItems from '../initializers/startMenuItems';

class StartMenu extends Component{
  constructor(props){
    super(props);

    this.buildStartMenuItems = this.buildStartMenuItems.bind(this);
  }

  buildStartMenuItems(){
    return startMenuItems.map((item) => {
      return (
        <li>
          <StartMenuItem 
            label={item.label}
            icon={item.icon}
            content={item.content}
          />
        </li>
      )
    })
  }

  render(){
    return (
      <div class="start-menu" id="start-menu">
        <div class="start-logo"></div>
        <div class="start-menu-items">
          <ul>
            {this.buildStartMenuItems()}
          </ul>
        </div>
      </div>
    )
  }
}

export default StartMenu;