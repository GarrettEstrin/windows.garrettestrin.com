import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from './icon';
import IconWindow from './iconWindow';
import Application from './application';
import ApplicationWindow from './applicationWindow';
import TaskBar from './taskbar';
import StartMenu from './startMenu';

import IconProps from '../initializers/iconProps';

class Desktop extends Component{
  constructor(props){
    super(props);
    this.state = {
      showStartMenu: false
    }
    this.buildDesktopIcons = this.buildDesktopIcons.bind(this);
    this.buildIconWindow = this.buildIconWindow.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount(){
    arrangeIcons();
  }

  handleStartClick(){
    this.setState({ showStartMenu: !this.state.showStartMenu })
  }

  buildDesktopIcons(){
    return IconProps.map((icon) => {
      return (
        <Icon
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

  buildIconWindow() {
    let { projectCodeLink, projectDescription, projectIcon, projectTitle, projectSubtitle, projectThumbnail, projectViewLink } = this.props.icon;
    return (
      <IconWindow 
        projectTitle={projectTitle}
        projectIcon={projectIcon}
        projectSubtitle={projectSubtitle}
        projectDescription={projectDescription}
        projectThumbnail={projectThumbnail}
        projectCodeLink={projectCodeLink}
        projectViewLink={projectViewLink}
      />
    )
  }

  buildApplicationWindow() {
    return (
      <ApplicationWindow 
        view="views/tic-tac-toe.html"
        projectTitle={"Tic-Tac-Toe"}
      />
    )
  }

  render(){
    return (
      <div class="desktop">
        {this.buildDesktopIcons()}
        <Application
          projectTitle="Tic-Tac-Toe" 
          projectIcon="icon ttt-icon"
        />
        {this.props.icon.showApplicationWindow ? this.buildApplicationWindow() : null}
        {this.props.icon.showWindow ? this.buildIconWindow() : null}
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

function mapStateToProps(applicationState){
  let { icon } = applicationState;
  if(!icon.showWindow)
    icon.showWindow = false;
  return { icon };
}

export default connect(mapStateToProps)(Desktop);