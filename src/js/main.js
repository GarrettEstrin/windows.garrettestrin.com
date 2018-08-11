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

// function to arrange icons based on screen length

function arrangeIcons() {
    const icons = document.getElementsByClassName('app');
    const num_of_icons = icons.length;
    const desktopHeight = window.innerHeight - 28;
    const num_of_columns = Math.round(desktopHeight/(num_of_icons*100));
    const icons_per_col = Math.floor(desktopHeight/100);
    var top = 10;
    var left = 10;
    var top_inc = 110;
    var left_inc = 110;
    for(var i=0;i<icons.length;i++){
        if(i%icons_per_col == 0 && i !=0){
            top = 10;
            left = left + left_inc;
        }
        icons[i].style.top = top + "px";
        top = top + top_inc;
        icons[i].style.left = left + "px";
    }
}
// Make arrangeIcons globally available
window.arrangeIcons = arrangeIcons;
window.toggleShow = toggleShow;
// Call arrangeIcons when page is loaded and call it when the page is resized
window.addEventListener('resize', arrangeIcons);

function startUp() {
  var audio = new Audio('audio/windows-95-startup.mp3');
  audio.play();
  document.getElementById('jsStartUpImage').classList.add('fade-in');
}

startUp();

