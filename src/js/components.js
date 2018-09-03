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

