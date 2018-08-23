import React, { Component } from 'react';
import App from './app';
import Application from './application';
import TaskBar from './taskbar';
import StartMenu from './startMenu';

import AppProps from '../initializers/appProps';

class Desktop extends Component{
  constructor(props){
    super(props);
    this.state = {
      showStartMenu: false
    }
    this.buildDesktopIcons = this.buildDesktopIcons.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount(){
    arrangeIcons();
  }

  handleStartClick(){
    this.setState({ showStartMenu: !this.state.showStartMenu })
  }

  buildDesktopIcons(){
    return AppProps.map((icon) => {
      return (
        <App
          projectTitle={icon.projectTitle}
          projectIcon={icon.projectIcon}
          projectSubtitle={icon.projectSubtitle}
          projectDescription={icon.projectDescription}
          projectThumbnail={icon.projectThumbnail}
          projectCodeLink={icon.projectCodeLink}
          projectViewLink={icon.projectViewLink}
        />
      )
    })
  }

  render(){
    return (
      <div class="desktop">
        {this.buildDesktopIcons()}
        <Application
          projectTitle="Tic-Tac-Toe" 
          projectIcon="icon ttt-icon"
        />
        <div class="window" id="window"></div>
        <TaskBar handleClick={this.handleStartClick}/>
        {this.state.showStartMenu ? <StartMenu /> : null}
      </div>
    )
  }
}

function arrangeIcons() {
  const icons = document.getElementsByClassName('app');
  const num_of_icons = icons.length;
  const desktopHeight = window.innerHeight - 28;
  const num_of_columns = Math.round(desktopHeight/(num_of_icons*100));
  const icons_per_col = Math.floor(desktopHeight/100);
  var top = 10;
  var left = 10;
  var top_inc = 110;
  var left_inc = 110;
  for(var i=0;i<icons.length;i++){
      if(i%icons_per_col == 0 && i !=0){
          top = 10;
          left = left + left_inc;
      }
      icons[i].style.top = top + "px";
      top = top + top_inc;
      icons[i].style.left = left + "px";
  }
}

// TODO: do this in state
window.arrangeIcons = arrangeIcons;
window.addEventListener('resize', window.arrangeIcons);

export default Desktop;