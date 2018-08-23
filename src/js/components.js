const React = require('react'),
  ReactDOM = require('react-dom'),
  Draggable = require('react-draggable'),
  createClass = require('create-react-class')

var globalMessage;

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

// // About Start Menu Item
// ReactDOM.render(
// <StarMenuItem
// label="About"
// icon="images/icons/icon_24-0.png"
// content='<div class="window-about"><h4 class="indent">I am a self-motivated and educated web developer. My experience building full-stack web applications in JavaScript, PHP and Ruby allows me to work on all aspects of projects and be productive when working on projects that are built in a team environment. In addition to my web development skills, my management experience allows me to be a leader or productive team member when it is needed.</div>' />,
// document.getElementById('startMenu1')
// )

// // Contact Start Menu Item
// ReactDOM.render(
// <StarMenuItem
// label="Contact"
// icon="images/icons/icon_17-0.png" 
// content='<ul class="contact-content"><h3><a href="mailto:contact@garrettestrin.com" target="_top">Email Me!</a> <img src="./images/email-min.png" alt="email icon"></h3><h3><a href="https://github.com/garrettestrin" target="_top">Github</a> <img src="./images/github-min.png" alt="gihub icon"></h3><h3><a href="https://www.linkedin.com/in/garrettestrin" target="_top">LinkedIn</a> <img src="./images/linkedin-min.png" alt="linkedin icon"></h3><h3><a href="https://twitter.com/garrettestrin">Twitter</a><img src="./images/twitter-min.png" alt="twitter icon"></h3></ul>'/>,
// document.getElementById('startMenu2')
// )

// // Projects Start Menu Item
// ReactDOM.render(
// <StarMenuItem
// label="Projects"
// icon="images/icons/icon_3-0.png" 
// content='<div style="    
//   height: 400px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   width: 100%;
//   justify-content: space-around;"
// >Feature Coming Soon</div>'/>,
// document.getElementById('startMenu3')
// )

// // Projects Start Menu Item
// ReactDOM.render(
// <StarMenuItem
// label="Preferences"
// icon="images/icons/icon_22-0.png" 
// content='
// <div style="    
//   height: 400px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   width: 100%;
//   justify-content: space-around;"
// >
//   Feature Coming Soon
// </div>'/>,
// document.getElementById('startMenu4')
// )
// // Projects Start Menu Item
// ReactDOM.render(
//   <StarMenuItem
//   label="Welcome"
//   icon="images/icons/icon_60-0.png" 
//   content='welcome'/>,
//   document.getElementById('startMenu5')
//   )

// function showStartUpMessage(message){
//   ReactDOM.render(
//     <StartMenuWindow
//       projectTitle={"Welcome to GarrettEstrin.com"}
//       content={`
//       <div class="window-about" style="margin: 20px 0"><p style="margin: 0;" id="jsWelcomeMessage">${message}</p></div>
//       <img src="images/logo.png"
//         style="    
//           width: 80%;
//           margin: 20px auto;
//           display: block;
//         "
//       ">
//       `}
//     />, 
//     document.getElementById('window'));
// }


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
        // completeStartup(message);
        return;
    }
    var message = "This website is designed to look like the classic theme from Microsoft Windows 95.  It is built using the React front-end Javascript Framework as well as front-end development tools such as Webpack and Sass.";
    globalMessage = message;
    // completeStartup(message);
  }
}
function completeStartup(message){
  setTimeout(function(){
    document.getElementById('jsStartUp').classList.add('fade-out');
  }, 3000)
  setTimeout(function(){
    document.getElementById('jsStartUp').classList.add('display--none');
    // renderDesktopIcons();
    // window.arrangeIcons();
  }, 5000)
  setTimeout(function(){
    showStartUpMessage(message);
  }, 5500)
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

