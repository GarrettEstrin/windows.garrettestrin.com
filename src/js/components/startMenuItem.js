import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clickStartMenuItem } from '../actions/start_menu_actions';

class StartMenuItem extends Component {
  constructor(props) {
    super(props);

    this.showWindow = this.showWindow.bind(this);
  }

  showWindow(){
    if(this.props.content == "welcome"){
      var label = "Welcome to GarrettEstrin.com"
      var content = `
      <div class="window-about" style="margin: 20px 0"><p style="margin: 0;" id="jsWelcomeMessage">${this.props.welcomeMessage.message}</p></div>
      <img src="images/logo.png"
        style="    
          width: 80%;
          margin: 20px auto;
          display: block;
        "
      ">
      `;
    } else {
      var label = this.props.label;
      var content = this.props.content;
    }
    this.props.dispatch(
      clickStartMenuItem({
        label,
        content
      })
    )
  }
  render(){
    return (
      <div onClick={this.showWindow}>
          <img src={this.props.icon} alt="" /><p className="text">{this.props.label}</p>
      </div>
    )
  }
}

function mapStateToProps(applicationState){
  let { startMenu, welcomeMessage } = applicationState;
  return { startMenu, welcomeMessage };
}

export default connect(mapStateToProps)(StartMenuItem);