import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clickIcon } from '../actions/icon_actions';

class Icon extends Component{
  constructor(props){
    super(props);

    this.showWindow = this.showWindow.bind(this);
  }
  showWindow(){
      let { projectTitle, projectSubtitle, projectDescription, projectThumbnail, projectCodeLink, projectViewLink } = this.props;

      this.props.dispatch(clickIcon({ 
        projectTitle, 
        projectCodeLink, 
        projectViewLink, 
        projectSubtitle, 
        projectDescription, 
        projectThumbnail
      }))
  }
  render(){
      return (
        <div className="app">
          <div className="icon-container" onClick={() => this.showWindow()}>
            <div className={this.props.projectIcon}></div>
            <div className="icon-text text">{this.props.projectTitle}</div>
          </div>
        </div>
      )
  }
};

function mapStateToProps(applicationState){
  let { icon } = applicationState;
  return { icon };
}

export default connect(mapStateToProps)(Icon);