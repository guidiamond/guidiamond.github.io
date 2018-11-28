$(document).ready(function(){

    let iframe = document.querySelector('.iframe');

    if(iframe.requestFullscreen) {
      iframe.requestFullscreen()
    }
    else if(iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen()
    }
    else if(iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen()
    }
    else if(iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen()
    }
});