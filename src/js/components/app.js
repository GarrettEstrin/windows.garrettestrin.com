import React, { Component } from 'react';

class App extends Component{
  showWindow(props){
      var window = document.getElementsByClassName('window')[0];
      window.style.display = "block";
      // ReactDOM.render(
      // <Window 
      // projectTitle={this.props.projectTitle}
      // projectSubtitle={this.props.projectSubtitle}
      // projectDescription={this.props.projectDescription}
      // projectThumbnail={this.props.projectThumbnail}
      // projectCodeLink={this.props.projectCodeLink}
      // projectViewLink={this.props.projectViewLink}/>,
      // document.getElementById('window')
      // )
  }
  render(){
      return (
        <div className="app">
          <div className="icon-container" onClick={this.showWindow}>
            <div className={this.props.projectIcon}></div>
            <div className="icon-text text">{this.props.projectTitle}</div>
          </div>
        </div>
      )
  }
};

export default App;