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



