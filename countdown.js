var countDownDate = new Date('Jan 31, 2018 00:00:00').getTime();
var ele = document.getElementById('release-countdown');
var containerWidth = ele.getBoundingClientRect().width;
var heading = ele.getElementsByClassName('heading')[0];
var title = ele.getElementsByClassName('title')[0];

// Fix width
ele.style.width = (containerWidth+5) + "px";

// Update initial text
heading.innerHTML = "New Single in";

var x = setInterval(function() {
  var now = new Date().getTime(); // Get now date and time
  var remainingTime = countDownDate - now;

  // Calculate time for days, hours, minutes and seconds
  var rDays = Math.floor(remainingTime / (1000*60*60*24));
  var rHours = Math.floor(( remainingTime % (1000*60*60*24) ) / (1000*60*60));
  var rMin = Math.floor(( remainingTime % (1000*60*60) ) / (1000*60));
  var rSec = Math.floor(( remainingTime % (1000*60) ) / (1000));

  title.innerHTML = rDays + 'd '
    + rHours.toString().padStart(2, 0) + ':'
    + rMin.toString().padStart(2, 0) + ':'
    + rSec.toString().padStart(2, 0);

  if (remainingTime < 0) {
    clearInterval(x);
    heading.innerHTML = "New Single..."
    title.innerHTML = 'Out Now!'
  }
}, 1000);
