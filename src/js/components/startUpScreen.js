import React, { Component } from 'react';

class StartUpScreen extends Component {
  constructor(props){
    super(props);

    this.state = { fadeStartup: false };
  }

  componentDidMount() {
    var audio = new Audio('audio/windows-95-startup.mp3');
    audio.play();
    setTimeout(
      function() {
          this.setState({fadeStartup: true});
      }
      .bind(this),
      5000
    );
    setTimeout(
      function() {
          this.unmountMe();
      }
      .bind(this),
      7000
    );
  }

  unmountMe() {
    this.props.unmountMe();
  }

  render() {
    return (
      <div class={this.state.fadeStartup ? "startup fade-out" : "startup"} id="jsStartUp">
        <img src="/images/startup.png" id="jsStartUpImage" class="startup-img fade-in" />
      </div>
    )
  }
};

export default StartUpScreen;