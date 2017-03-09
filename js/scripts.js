$(document).ready(function() {
  var timePause = 5;
  var timeWork = 25;
  
 //Default starting Pause time 
   $("#pauseDisplay").html(timePause + " minutes");
 
 //Adjusting Pause time with + and - buttons
  $("p").on("click", function(pauseTime) {
    if (this.id === "pausePlus") {
      timePause ++;
      $("#pauseDisplay").html(timePause + " minutes");
    } else if (this.id === "pauseMinus" && timePause >2) {
      timePause --;
      $("#pauseDisplay").html(timePause + " minutes");
    }  else if (this.id === "pauseMinus" && timePause <=0) {
      console.log("Time can't be negatif!");
    } else if (this.id === "pauseMinus" && timePause <=2) {
      timePause --;
      $("#pauseDisplay").html(timePause + " minute");
    }
    console.log("Pause time is " + timePause + " minute(s)");
  });
 
  //Clock countdown
  var displaySec;
 
    function changeColor() {
      displaySec = setInterval(countDownSec, 1000);
    }
 //*** Work left off here
    function countDownSec() {
      var oElem = document.getElementById('mainDisplaySec');
      oElem.style.color = oElem.style.color == 'lime' ? 'blue' : 'lime';
    }
 //to Pause countdown
    function stopCountdown() {
      clearInterval(displaySec);
    }
  //Run timer GO button action
  $("#goClock").on("click", function(changeColor));
  //pause button action
   $("#pauseClock").on("click", function(stopCountdown));
/*
 $("#pauseClock").on("click", function(stopCountdown));
 */
});
