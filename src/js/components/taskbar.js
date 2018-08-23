import React, { Component } from 'react';

class TaskBar extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    startTime();
  }

  render(){
    return (
      <div class="taskbar">
        <div id="start" class="startRest" onClick={() => this.props.handleClick()}>Start</div>
        <div class="notifications text">
            <div class="notification-icon"></div>
            <div class="time" id="time" onload="startTime()"></div>
        </div>
      </div>
    )
  }
}

// notification clock function
function startTime() {
  var now = new Date();
  var h = now.getHours();
  var ampm = "AM";
  if (h > 12){
      h = h - 12
      ampm = "PM";
  }else if (h==0){
      h=12;
  }
  var m = now.getMinutes();
  if(m < 10){
      m = "0" + m;
  }
  document.getElementById('time').innerHTML =
  h + ":" + m + " " + ampm;
  var t = setTimeout(startTime, 15000);
}

export default TaskBar;