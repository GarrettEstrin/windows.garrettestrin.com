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

window.toggleShow = toggleShow;
// Call arrangeIcons when page is loaded and call it when the page is resized


function startUp() {
  var audio = new Audio('audio/windows-95-startup.mp3');
  audio.play();
  document.getElementById('jsStartUpImage').classList.add('fade-in');
}

startUp();

