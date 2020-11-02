(function() {

  var sessionLength = 25;
  var breakLength = 5;
  var mins = 25;
  var secs = 0;
  var onSession = true; 
  var timerRunning = false;
  var countdown; 

  var bodyColor = "blue";
  var accentColor = "black";

 

  function resetTimer() {
    mins = onSession ? sessionLength : breakLength;
    if (timerRunning) mins--;
    secs = 0;
    clearInterval(countdown);
    document.getElementById("timerMin").innerHTML = mins < 10 ? "0" + mins : mins.toString();
    document.getElementById("timerSec").innerHTML = "00";
  }

  function setSession() { 
   
    document.getElementById("sessionButton").style.backgroundColor = accentColor;
    document.getElementById("sessionButton").style.color = bodyColor;
    
    document.getElementById("breakButton").style.backgroundColor = bodyColor;
    document.getElementById("breakButton").style.color = accentColor;
    
    resetTimer();
  }

  function setBreak() {
    document.getElementById("breakButton").style.backgroundColor = accentColor;
    document.getElementById("breakButton").style.color = bodyColor;
  
    document.getElementById("sessionButton").style.backgroundColor = bodyColor;
    document.getElementById("sessionButton").style.color = accentColor;
   
    resetTimer();
  }

  function playOrPause() {
    if (timerRunning) {
      document.getElementById("playPause").innerHTML = "<i class=\"fa fa-pause\"></i>";
      countdown = setInterval(function() {
        secs--;
        if (secs < 0) {
          mins--;
          if (mins < 0) { 
            onSession = !onSession;
            if (onSession) {
              alert("Time to work for " + sessionLength + " minutes!");
              setSession(); 
            } else {
              alert("Break time! Relax for " + breakLength + " minutes.");
              setBreak(); 
            }
            playOrPause(); 
          }
          document.getElementById("timerMin").innerHTML = mins < 10 ? "0" + mins : mins.toString();
          secs = 59;
        }
        document.getElementById("timerSec").innerHTML = secs < 10 ? "0" + secs : secs.toString();
      }, 1000);
    } else {
      document.getElementById("playPause").innerHTML = "<i class=\"fa fa-play\"></i>";
      clearInterval(countdown);
    }
  }



  document.getElementById("sessionButton").onclick = function() {
    if (timerRunning) return;
    onSession = true;
    setSession();
  }

  document.getElementById("breakButton").onclick = function() {
    if (timerRunning) return;
    onSession = false;
    setBreak();
  }

  

  document.getElementById("sessionDec").onclick = function() {
    if (sessionLength == 1 || timerRunning) return;
    sessionLength--;
    document.getElementById("sessionTime").innerHTML = sessionLength < 10 ? "0" + sessionLength : sessionLength.toString();
    resetTimer();
  }

  document.getElementById("sessionInc").onclick = function() {
    if (sessionLength == 99 || timerRunning) return;
    sessionLength++;
    document.getElementById("sessionTime").innerHTML = sessionLength < 10 ? "0" + sessionLength : sessionLength.toString();
    resetTimer();
  }

  document.getElementById("breakDec").onclick = function() {
    if (breakLength == 1 || timerRunning) return;
    breakLength--;
    document.getElementById("breakTime").innerHTML = breakLength < 10 ? "0" + breakLength : breakLength.toString();
    resetTimer();
  }

  document.getElementById("breakInc").onclick = function() {
    if (breakLength == 99 || timerRunning) return;
    breakLength++;
    document.getElementById("breakTime").innerHTML = breakLength < 10 ? "0" + breakLength : breakLength.toString();
    resetTimer();
  }


  document.getElementById("playPause").onclick = function() {
    timerRunning = !timerRunning; 
    playOrPause();
  }

  document.getElementById("reset").onclick = function() {
    document.getElementById("playPause").innerHTML = "<i class=\"fa fa-play\"></i>";
    timerRunning = false;
    resetTimer();
  }
}());


  
 

 

  