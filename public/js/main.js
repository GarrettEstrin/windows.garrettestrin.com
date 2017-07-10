// right click context menu
// (function() {

//   "use strict";

//   document.addEventListener( "contextmenu", function(e) {
//     console.log(e);
//   });

// })();

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

startTime();

function toggleShow(el){
    var element = document.getElementById(el);
    if(element.style.display == "none" || element.style.display == ""){
        element.style.display = "block";
    }else if(element.style.display == "block"){
        element.style.display = "none";
    }
}
