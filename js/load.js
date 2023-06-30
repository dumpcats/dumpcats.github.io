document.getElementById("hide").style.display="block";
window.onbeforeunload=function(){window.scrollTo(0,0);}
window.onload=function(){document.getElementById("hide").style.display="none";}