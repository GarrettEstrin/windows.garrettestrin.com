function toggleShow(el){
    var element = document.getElementById(el);
    if(element.style.display == "none" || element.style.display == ""){
        element.style.display = "block";
    }else if(element.style.display == "block"){
        element.style.display = "none";
    }
}

window.toggleShow = toggleShow;

