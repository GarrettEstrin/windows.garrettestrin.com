import React, { Component } from 'react';

class Application extends Component{
  constructor(props){
    super(props);

  }

  showWindow(){
    // var window = document.getElementsByClassName('window')[0];
    // window.style.display = "block";
    // ReactDOM.render(
    // <AppWindow
    // projectTitle={this.props.projectTitle}
    // />,
    // document.getElementById('window')
    // )
  }
  render(){
      return (
        <div class="app">
          <div className="icon-container" onClick={this.showWindow}>
              <div className={this.props.projectIcon}></div>
              <div className="icon-text text">{this.props.projectTitle}</div>
          </div>
        </div>
      )
  }
}

export default Application;