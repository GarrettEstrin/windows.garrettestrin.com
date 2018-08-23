import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createClass from 'create-react-class';

import StartUpScreen from './startUpScreen.js';
import { App, Application } from './components';


class EntryApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      startUpMounted: true
    }

    this.handleStartUpScreenUnmount = this.handleStartUpScreenUnmount.bind(this);
  }

  handleStartUpScreenUnmount(){
    console.log("unmounting startup");
    this.setState({startUpMounted: false});
  }
  render() {
    return (
      <div>
        { this.state.startUpMounted ? <StartUpScreen unmountMe={this.handleStartUpScreenUnmount}/> : null }
        {/* <div class="desktop">
            <div id="app1" class="app">
            <App
              projectTitle="Community Story Time" 
              projectIcon="icon story-time-icon"
              projectSubtitle="A rails based web app that allows people to collaborate on stories."
              projectDescription="At community story time, users can start stories, continue previously started stories and make comments on stories."
              projectThumbnail="story-time thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/story_time"
              projectViewLink="http://st.garrettestrin.com/"
            />
            </div>
            <div id="app2" class="app">
            <App
              projectTitle="The Beer Journal" 
              projectIcon="icon beer-journal-icon"
              projectSubtitle="A MEAN stack application where a user can log, review and share beers they have drunk"
              projectDescription="Users can create and login in to the web app and create and see beers that they have drunk."
              projectThumbnail="beer-journal thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/beer_web"
              projectViewLink="http://tbj.garrettestrin.com/"
            />
            </div>
            <div id="app3" class="app">
            <App
              projectTitle="Our Big Day in SF" 
              projectIcon="icon big-day-icon"
              projectSubtitle="Interactive Wedding Website"
              projectDescription="Users can visit website for all wedding information and can fill out a form to inform bride and groom RSVP status."
              projectThumbnail="big-day thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/big_day"
              projectViewLink="http://ourbigdayinsf.com/"
            />
            </div>
            <div class="app" id="app4">
            <App
              projectTitle="A Word is Worth One Picture" 
              projectIcon="icon picture-game-icon"
              projectSubtitle="A node.js based web app where users can play a word and image based game."
              projectDescription="Users can create and login in to the web app and create see games that they are playing in."
              projectThumbnail="picture-game thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/Project-3"
              projectViewLink="https://infinite-eyrie-42957.herokuapp.com/"
            />
            </div>
            <div class="app" id="app5">
            <App
              projectTitle="Guac-a-Mole!" 
              projectIcon="icon mole-icon"
              projectSubtitle="A JavaScript based game."
              projectDescription="Simple game that allows a user to 'whack' as many moles as possible in the alloted time."
              projectThumbnail="mole-game thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/guac-a-mole"
              projectViewLink="https://garrettestrin.github.io/guac-a-mole/"
            />
            </div>
            <div class="app" id="app6">
            <App
              projectTitle="Did the Ducks Win?" 
              projectIcon="icon ducks-icon"
              projectSubtitle="DB Proof of Concept."
              projectDescription="Simple site that uses a Google Spreadsheet as a database"
              projectThumbnail="ducks thumbnail"
              projectCodeLink="https://github.com/GarrettEstrin/didtheduckswin.com"
              projectViewLink="http://didtheduckswin.com"
            />
            </div>
            <div class="app" id="app7">
            <Application
              projectTitle="Tic-Tac-Toe" 
              projectIcon="icon ttt-icon"
            />
            </div>
            <div class="window" id="window"></div>
            <div class="taskbar">
              <div id="start" class="startRest" onclick="window.toggleShow('start-menu'), window.toggleShow('start-menu-overlay')">Start</div>
              <div class="notifications text">
                  <div class="notification-icon"></div>
                  <div class="time" id="time" onload="startTime()"></div>
              </div>
            </div>
            <div class="start-menu-overlay" id="start-menu-overlay" onclick="window.toggleShow('start-menu'), window.toggleShow('start-menu-overlay')"></div>
              <div class="start-menu" id="start-menu">
                <div class="start-logo"></div>
                <div class="start-menu-items">
                  <ul>
                    <li id="startMenu1"></li>
                    <li id="startMenu2"></li>
                    <li id="startMenu3"></li>
                    <li id="startMenu4"></li>
                    <li id="startMenu5"></li>
                  </ul>
                </div>
              </div>
        </div> */}
      </div>
    )
  }
}

ReactDOM.render(
  <EntryApp />,
  document.getElementById('app')
)