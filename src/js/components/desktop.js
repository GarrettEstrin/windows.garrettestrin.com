import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import Icon from './icon';
import IconWindow from './iconWindow';
import Application from './application';
import ApplicationWindow from './applicationWindow';
import TaskBar from './taskbar';
import StartMenu from './startMenu';
import StartMenuWindow from './startMenuWindow';

import IconProps from '../initializers/iconProps';

import { clickStartMenuItem } from '../actions/start_menu_actions';

class Desktop extends Component{
  constructor(props){
    super(props);
    this.state = {
      showStartMenu: false
    }
    this.buildDesktopIcons = this.buildDesktopIcons.bind(this);
    this.buildIconWindow = this.buildIconWindow.bind(this);
    this.buildStartMenuWindow = this.buildStartMenuWindow.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleDesktopClick = this.handleDesktopClick.bind(this);
    this.showWelcomeMessage = this.showWelcomeMessage.bind(this);
    this.getDataFromSpreadsheet = this.getDataFromSpreadsheet.bind(this);
    this.parseDataFromSpreadSheetAndFindSpecificMessage = this.parseDataFromSpreadSheetAndFindSpecificMessage.bind(this);
    this.getUrlParameter = this.getUrlParameter.bind(this);
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

  buildStartMenuWindow() {
    return (
      <StartMenuWindow
        projectTitle={this.props.icon.projectTitle}
        content={this.props.icon.content}
      />
    )
  }

  handleDesktopClick() {
    if(this.state.showStartMenu) {
      this.setState({
        showStartMenu: false
      })
    }
  }

  getDataFromSpreadsheet() {
    let _this = this;
    Axios.get("https://spreadsheets.google.com/feeds/list/1l7ovaYTY2TvZ8zUHldG90RNltrlI3TVaje1OwXrjXR0/od6/public/values?alt=json")
      .then(function({ data }){
        _this.parseDataFromSpreadSheetAndFindSpecificMessage(data.feed.entry);
      })
      .then(function(){
        _this.showWelcomeMessage();
      })
  }

  parseDataFromSpreadSheetAndFindSpecificMessage(data) {
    let _this = this;
    let affiliateCode = _this.getUrlParameter('a');
    for(var i = 0, a = data, c = a.length;i<c;i++){
      if(a[i].gsx$a.$t == affiliateCode){
        let message = a[i].gsx$message.$t;
        _this.setState({
          message
        })
        return;
      }
      let message = "This website is designed to look like the classic theme from Microsoft Windows 95.  It is built using the React front-end Javascript Framework as well as front-end development tools such as Webpack and Sass.";
      _this.setState({
        message
      })
    }
  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  showWelcomeMessage() {
    this.props.dispatch(
      clickStartMenuItem({
        label: "Welcome",
        content:  `
          <div class="window-about" style="margin: 20px 0"><p style="margin: 0;" id="jsWelcomeMessage">${this.state.message}</p></div>
          <img src="images/logo.png"
            style="    
              width: 80%;
              margin: 20px auto;
              display: block;
            "
          ">
          `
      })
    )
  }

  componentWillMount() {
    this.getDataFromSpreadsheet();
  }

  render(){
    return (
      <div class="desktop" onClick={() => this.handleDesktopClick()}>
        {this.buildDesktopIcons()}
        {this.props.icon.showWindow ? this.buildIconWindow() : null}
        <Application
          projectTitle="Tic-Tac-Toe" 
          projectIcon="icon ttt-icon"
        />
        {this.props.icon.showApplicationWindow ? this.buildApplicationWindow() : null}
        <TaskBar handleClick={this.handleStartClick}/>
        {this.state.showStartMenu ? <StartMenu /> : null}
        {this.props.startMenu.showStartMenuWindow ? this.buildStartMenuWindow() : null}
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
  let { icon, startMenu } = applicationState;
  if(!icon.showWindow)
    icon.showWindow = false;
  return { icon, startMenu };
}

export default connect(mapStateToProps)(Desktop);