import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clickApplicationIcon } from '../actions/icon_actions';

class Application extends Component{
  constructor(props){
    super(props);

    this.showApplicationWindow = this.showApplicationWindow.bind(this);
  }

  showApplicationWindow(){
    this.props.dispatch(clickApplicationIcon({
      projectIcon: this.props.projectIcon,
      projectTitle: this.props.projectTitle
    }))
  }
  render(){
      return (
        <div class="app">
          <div className="icon-container" onClick={this.showApplicationWindow}>
              <div className={this.props.projectIcon}></div>
              <div className="icon-text text">{this.props.projectTitle}</div>
          </div>
        </div>
      )
  }
}

function mapStateToProps(applicationState){
  let { icon } = applicationState;
  return { icon };
}

export default connect(mapStateToProps)(Application);