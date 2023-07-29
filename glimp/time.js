document.getElementById("hide").style.display="block",window.onbeforeunload=function(){window.scrollTo(0,0)},window.onload=function(){document.getElementById("hide").style.display="none"};

document.addEventListener("visibilitychange",(event)=>{if(document.visibilityState=="visible"){document.title="glimpixels";}else{document.title="glimpixels - waiting YOU";}});

var span = document.getElementById('time');

function time() {
  var d = new Date();
  var s = d.getUTCSeconds();
  var m = d.getUTCMinutes();
  var h = d.getUTCHours() + 7;
  if (h > 23) {
	  h = Math.abs(24 - h);
  }
  span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  console.log(d);
}

setInterval(time, 1000);