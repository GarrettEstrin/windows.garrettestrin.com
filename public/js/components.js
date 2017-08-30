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

var Application = React.createClass({
showWindow: function(props){
    console.log("show window");
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
        <div className="icon-text">{this.props.projectTitle}</div>
    </div>
    )
}
});
var AppWindow = React.createClass({
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
    <div className="application-container window-container">
        <div className="window-title-bar">
            {this.props.projectTitle}
            <div className="x" onClick={this.unmountMe}>x</div>
        </div>
        <iframe src="views/tic-tac-toe.html" frameBorder="0"></iframe>
    </div>
    )
}
});
var StarMenuItem = React.createClass({
    showWindow: function(props){
        console.log("show window");
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "block";
        ReactDOM.render(
        <StartMenuWindow
        projectTitle={this.props.label}
        content={this.props.content}
        />,
        document.getElementById('window')
        )
        toggleShow('start-menu');
        toggleShow('start-menu-overlay')
    },
    unmountMe: function(){
        console.log("unmount")
        ReactDOM.unmountComponentAtNode(
        document.getElementById('startMenuWindow')
        )
        var window = document.getElementsByClassName('window')[0];
        window.style.display = "none";
    },
    render: function(){
        return (
            <div onClick={this.showWindow}>
                <img src={this.props.icon} alt="" /><p>{this.props.label}</p>
            </div>
        )
    }
});
var StartMenuWindow = React.createClass({
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
        <div className="application-container window-container start-menu-container">
            <div className="window-title-bar">
                {this.props.projectTitle}
                <div className="x" onClick={this.unmountMe}>x</div>
            </div>
            <div 
            dangerouslySetInnerHTML={{__html: this.props.content}} />
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

// Tic Tac Toe
ReactDOM.render(
<Application
projectTitle="Tic-Tac-Toe" 
projectIcon="icon ttt-icon"/>,
document.getElementById('app7')
)

// About Start Menu Item
ReactDOM.render(
<StarMenuItem
label="About"
icon="images/icons/icon_24-0.png"
content='<div><h4 class="indent"> I am a web developer and former grocery store manager that learned how to lead teams to a shared goal through focusing efforts and recognizing great ideas from any source.  I am passionate about technology, learning and creating and have used these passions to expand on my skills in programming and web development.</h4><h4 class="indent">My degree in professional management taught me to lead and be a part of teams that are comprised of individuals with individual needs and personalities.</h4><h4 class="indent">At WDI, I was taught how to learn the latest and most in-demand programming languages quickly and to implement them efficiently in projects.</h4><h4 class="indent">Web programming started as a hobby for me through building fun, personal websites and exploring what is possible in web programming.  I am ready to turn this hobby into a career that I love.</h4><h4 class="indent">I am currently accepting freelance work in web development.  Please contact me to schedule work.</h4><br/></div>' />,
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
content='<div style="height: 400px; background-color: red;"></div>'/>,
document.getElementById('startMenu3')
)

// Projects Start Menu Item
ReactDOM.render(
<StarMenuItem
label="Preferences"
icon="images/icons/icon_22-0.png" 
content='<div class="preferences-content">    <div class="tab">        Background    </div>    <!-- start container -->    <div class="container cf">        <!-- start preview -->        <div class="preview">Preview stuff</div>        <!-- end preview -->        <!-- start selection containter -->        <div class="selection-container">            <!-- start pattern -->            <div class="pattern">Pattern stuff</div>            <!-- end pattern -->            <!-- start wallpaper -->            <div class="wallpaper">Wallpaper stuff</div>            <!-- end wallpaper -->        </div>        <!-- end selection container -->    </div>    <!-- end container --></div>'/>,
document.getElementById('startMenu4')
)
