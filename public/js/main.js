// right click context menu
(function() {

  "use strict";

  document.addEventListener( "contextmenu", function(e) {
    console.log(e);
  });

})();

// notification clock function
function startTime() {
    console.log("start Time")
    var now = new Date();
    var h = now.getHours();
    var ampm = "AM";
    if (h > 12){
        h = h - 12
        ampm = "PM";
    }
    var m = now.getMinutes();
    if(m < 10){
        m = "0" + m;
    }
    document.getElementById('time').innerHTML =
    h + ":" + m + " " + ampm;
    var t = setTimeout(startTime, 15000);
}

startTime();