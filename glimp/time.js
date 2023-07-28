var span = document.getElementById('time');
var o = new Date().getTimezoneOffset();

function time() {
  var d = new Date();
  // console.log(d);
  // d.setDate(d.getDate);
  // console.log(d);
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