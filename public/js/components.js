var App = React.createClass({
showWindow: function(props){
    console.log("show window");
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
        <div className="icon-text">{this.props.projectTitle}</div>
    </div>
    )
}
});
var Window = React.createClass({
unmountMe: function(){
    console.log("unmount")
    ReactDOM.unmountComponentAtNode(
    document.getElementById('window')
    )
    var window = document.getElementsByClassName('window')[0];
    window.style.display = "none";
},
render: function(){
    return (
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
    )
}
});
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
