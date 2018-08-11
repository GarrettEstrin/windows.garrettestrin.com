const React = require('react'),
  ReactDOM = require('react-dom'),
  Draggable = require('react-draggable'),
  createClass = require('create-react-class')

var globalMessage;
var App = createClass({
showWindow: function(props){
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "block";
    ReactDOM.render(
    <Window 
    projectTitle={this.props.projectTitle}
    projectSubtitle={this.props.projectSubtitle}
    projectDescription={this.props.projectDescription}
    projectThumbnail={this.props.projectThumbnail}
    projectCodeLink={this.props.projectCodeLink}
    projectViewLink={this.props.projectViewLink}/>,
    document.getElementById('window')
    )
},
render: function(){
    return (
    <div className="icon-container" onClick={this.showWindow}>
        <div className={this.props.projectIcon}></div>
        <div className="icon-text text">{this.props.projectTitle}</div>
    </div>
    )
}
});
var Window = createClass({
unmountMe: function(){
    ReactDOM.unmountComponentAtNode(
    document.getElementById('window')
    )
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "none";
},
handleDrag: function(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  },
render: function(){
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};    
    return (
    <Draggable handle=".window-title-bar" {...dragHandlers}>
        <div className="window-container">
            <div className="window-title-bar">
            {this.props.projectTitle}
            <div className="x" onClick={this.unmountMe}>x</div>
            </div>
            <h1>{this.props.projectTitle}</h1>
            <h5>{this.props.projectSubtitle}</h5> 
            <div className="window-body"> 
            <h4>{this.props.projectDescription}</h4>
            <div className={this.props.projectThumbnail}></div>
            </div>
            <div className="btns-container">
            <a href={this.props.projectViewLink} target="_blank">
                <button className="btn btn-project">View Project</button>
            </a>
            <a href={this.props.projectCodeLink} target="_blank">
                <button className="btn btn-github">View Project Code</button>
            </a>
            <hr />
            <button className="btn btn-close" onClick={this.unmountMe}>Close</button>
            </div>
        </div>
        </Draggable>
    )
}
});

var Application = createClass({
showWindow: function(){
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "block";
    ReactDOM.render(
    <AppWindow
    projectTitle={this.props.projectTitle}
    />,
    document.getElementById('window')
    )
},
render: function(){
    return (
    <div className="icon-container" onClick={this.showWindow}>
        <div className={this.props.projectIcon}></div>
        <div className="icon-text text">{this.props.projectTitle}</div>
    </div>
    )
}
});
var AppWindow = createClass({
    unmountMe: function(){
        ReactDOM.unmountComponentAtNode(
        document.getElementById('window')
        )
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "none";
    },
    handleDrag: function(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
            }
        });
    },
    componentDidMount: function() {
    },
    render: function(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
        <Draggable handle=".window-title-bar" {...dragHandlers}>
            <div className="application-container window-container">
                <div className="window-title-bar">
                    {this.props.projectTitle}
                    <div className="x" onClick={this.unmountMe}>x</div>
                </div>
                <iframe src="views/tic-tac-toe.html" frameBorder="0"></iframe>
            </div>
        </Draggable>
        )
    }
});
var StarMenuItem = createClass({
    showWindow: function(){
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
    },
    unmountMe: function(){
        ReactDOM.unmountComponentAtNode(
        document.getElementById('startMenuWindow')
        )
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "none";
    },
    render: function(){
        return (
            <div onClick={this.showWindow}>
                <img src={this.props.icon} alt="" /><p className="text">{this.props.label}</p>
            </div>
        )
    }
});
var StartMenuWindow = createClass({
    unmountMe: function(){
        ReactDOM.unmountComponentAtNode(
        document.getElementById('window')
        )
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "none";
    },
    handleDrag: function(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
            }
        });
    },
    render: function(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};    
        return (
        <Draggable handle=".window-title-bar" {...dragHandlers}>
            <div className="application-container window-container start-menu-container">
                <div className="window-title-bar">
                    {this.props.projectTitle}
                    <div className="x" onClick={this.unmountMe}>x</div>
                </div>
                <div 
                  dangerouslySetInnerHTML={{__html: this.props.content}} 
                />
            </div>
        </Draggable>
        )
    }
});
var StartMenuWindow = createClass({
    unmountMe: function(){
        ReactDOM.unmountComponentAtNode(
        document.getElementById('window')
        )
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "none";
    },
    handleDrag: function(e, ui) {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
            }
        });
    },
    render: function(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};    
        return (
        <Draggable handle=".window-title-bar" {...dragHandlers}>
            <div className="application-container window-container start-menu-container">
                <div className="window-title-bar">
                    {this.props.projectTitle}
                    <div className="x" onClick={this.unmountMe}>x</div>
                </div>
                <div 
                dangerouslySetInnerHTML={{__html: this.props.content}} />
            </div>
        </Draggable>
        )
    }
});
function renderDesktopIcons(){
  //   Render Community Story Time Icon
  ReactDOM.render(
  <App
  projectTitle="Community Story Time" 
  projectIcon="icon story-time-icon"
  projectSubtitle="A rails based web app that allows people to collaborate on stories."
  projectDescription="At community story time, users can start stories, continue previously started stories and make comments on stories."
  projectThumbnail="story-time thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/story_time"
  projectViewLink="http://st.garrettestrin.com/"/>,
  document.getElementById('app1')
  )
  // Render The Beer Journal Icon
  ReactDOM.render(
  <App
  projectTitle="The Beer Journal" 
  projectIcon="icon beer-journal-icon"
  projectSubtitle="A MEAN stack application where a user can log, review and share beers they have drunk"
  projectDescription="Users can create and login in to the web app and create and see beers that they have drunk."
  projectThumbnail="beer-journal thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/beer_web"
  projectViewLink="http://tbj.garrettestrin.com/"/>,
  document.getElementById('app2')
  )
  // Render Our Big Day in SF Icon
  ReactDOM.render(
  <App
  projectTitle="Our Big Day in SF" 
  projectIcon="icon big-day-icon"
  projectSubtitle="Interactive Wedding Website"
  projectDescription="Users can visit website for all wedding information and can fill out a form to inform bride and groom RSVP status."
  projectThumbnail="big-day thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/big_day"
  projectViewLink="http://ourbigdayinsf.com/"/>,
  document.getElementById('app3')
  )
  //   A word is worth one picture
  ReactDOM.render(
  <App
  projectTitle="A Word is Worth One Picture" 
  projectIcon="icon picture-game-icon"
  projectSubtitle="A node.js based web app where users can play a word and image based game."
  projectDescription="Users can create and login in to the web app and create see games that they are playing in."
  projectThumbnail="picture-game thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/Project-3"
  projectViewLink="https://infinite-eyrie-42957.herokuapp.com/"/>,
  document.getElementById('app4')
  )

  //   Guac-a-Mole!
  ReactDOM.render(
  <App
  projectTitle="Guac-a-Mole!" 
  projectIcon="icon mole-icon"
  projectSubtitle="A JavaScript based game."
  projectDescription="Simple game that allows a user to 'whack' as many moles as possible in the alloted time."
  projectThumbnail="mole-game thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/guac-a-mole"
  projectViewLink="https://garrettestrin.github.io/guac-a-mole/"/>,
  document.getElementById('app5')
  )

  // Did the Ducks Win?
  ReactDOM.render(
  <App
  projectTitle="Did the Ducks Win?" 
  projectIcon="icon ducks-icon"
  projectSubtitle="DB Proof of Concept."
  projectDescription="Simple site that uses a Google Spreadsheet as a database"
  projectThumbnail="ducks thumbnail"
  projectCodeLink="https://github.com/GarrettEstrin/didtheduckswin.com"
  projectViewLink="http://didtheduckswin.com"/>,
  document.getElementById('app6')
  )

  // Tic Tac Toe
  ReactDOM.render(
  <Application
  projectTitle="Tic-Tac-Toe" 
  projectIcon="icon ttt-icon"/>,
  document.getElementById('app7')
  )
}

// About Start Menu Item
ReactDOM.render(
<StarMenuItem
label="About"
icon="images/icons/icon_24-0.png"
content='<div class="window-about"><h4 class="indent">I am a self-motivated and educated web developer. My experience building full-stack web applications in JavaScript, PHP and Ruby allows me to work on all aspects of projects and be productive when working on projects that are built in a team environment. In addition to my web development skills, my management experience allows me to be a leader or productive team member when it is needed.</div>' />,
document.getElementById('startMenu1')
)

// Contact Start Menu Item
ReactDOM.render(
<StarMenuItem
label="Contact"
icon="images/icons/icon_17-0.png" 
content='<ul class="contact-content"><h3><a href="mailto:contact@garrettestrin.com" target="_top">Email Me!</a> <img src="./images/email-min.png" alt="email icon"></h3><h3><a href="https://github.com/garrettestrin" target="_top">Github</a> <img src="./images/github-min.png" alt="gihub icon"></h3><h3><a href="https://www.linkedin.com/in/garrettestrin" target="_top">LinkedIn</a> <img src="./images/linkedin-min.png" alt="linkedin icon"></h3><h3><a href="https://twitter.com/garrettestrin">Twitter</a><img src="./images/twitter-min.png" alt="twitter icon"></h3></ul>'/>,
document.getElementById('startMenu2')
)

// Projects Start Menu Item
ReactDOM.render(
<StarMenuItem
label="Projects"
icon="images/icons/icon_3-0.png" 
content='<div style="    
  height: 400px;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;"
>Feature Coming Soon</div>'/>,
document.getElementById('startMenu3')
)

// Projects Start Menu Item
ReactDOM.render(
<StarMenuItem
label="Preferences"
icon="images/icons/icon_22-0.png" 
content='
<div style="    
  height: 400px;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;"
>
  Feature Coming Soon
</div>'/>,
document.getElementById('startMenu4')
)
// Projects Start Menu Item
ReactDOM.render(
  <StarMenuItem
  label="Welcome"
  icon="images/icons/icon_60-0.png" 
  content='welcome'/>,
  document.getElementById('startMenu5')
  )

function showStartUpMessage(message){
  ReactDOM.render(
    <StartMenuWindow
      projectTitle={"Welcome to GarrettEstrin.com"}
      content={`
      <div class="window-about" style="margin: 20px 0"><p style="margin: 0;" id="jsWelcomeMessage">${message}</p></div>
      <img src="images/logo.png"
        style="    
          width: 80%;
          margin: 20px auto;
          display: block;
        "
      ">
      `}
    />, 
    document.getElementById('window'));
}


  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function getDataFromSpreadsheet() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response).feed.entry;
      parseDataFromSpreadSheetAndFindSpecificMessage(data);
    }
  };
  xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1l7ovaYTY2TvZ8zUHldG90RNltrlI3TVaje1OwXrjXR0/od6/public/values?alt=json", true);
  xhttp.send();
}

function parseDataFromSpreadSheetAndFindSpecificMessage(data){
  var affiliateCode = getUrlParameter('a');
  for(var i = 0, a = data, c = a.length;i<c;i++){
    if(a[i].gsx$a.$t == affiliateCode){
      var message = a[i].gsx$message.$t;
      globalMessage = message;
      setTimeout(function(){
        fadeOut(document.getElementById('jsStartUp'));
      }, 3000)
      setTimeout(function(){
        renderDesktopIcons();
        window.arrangeIcons();
      }, 4500)
      setTimeout(function(){
        showStartUpMessage(message);
      }, 5500)
        return;
    }
    var message = "This website is designed to look like the classic theme from Microsoft Windows 95.  It is built using the React front end Javascript Framework as well as front end development tools such as Grunt and Sass.";
    globalMessage = message;
    setTimeout(function(){
      fadeOut(document.getElementById('jsStartUp'));
    }, 3000)
    setTimeout(function(){
      renderDesktopIcons();
      window.arrangeIcons();
    }, 4500)
    setTimeout(function(){
      showStartUpMessage(message);
    }, 5500)
  }
}

function fadeOut(el){
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .00499) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
getDataFromSpreadsheet();

