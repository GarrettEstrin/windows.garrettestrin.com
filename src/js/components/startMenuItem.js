import React, { Component } from 'react';

class StartMenuItem extends Component {
  constructor(props) {
    super(props);

  }

  showWindow(){
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "block";
    if(this.props.content == "welcome"){
      var label = "Welcome to GarrettEstrin.com"
      var content = `
      <div class="window-about" style="margin: 20px 0"><p style="margin: 0;" id="jsWelcomeMessage">${globalMessage}</p></div>
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
    ReactDOM.render(
    <StartMenuWindow
    projectTitle={label}
    content={content}
    />,
    document.getElementById('window')
    )
    toggleShow('start-menu');
    toggleShow('start-menu-overlay')
  }

  unmountMe(){
    ReactDOM.unmountComponentAtNode(
    document.getElementById('startMenuWindow')
    )
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "none";
  }
  render(){
    return (
      <div onClick={this.showWindow}>
          <img src={this.props.icon} alt="" /><p className="text">{this.props.label}</p>
      </div>
    )
  }
}

export default StartMenuItem;