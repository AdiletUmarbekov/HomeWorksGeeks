

let timerDisplay = document.querySelector("#timer");
let  timerPng = document.querySelector('.img')
let stopWatch;
// timerDisplay.innerHTML = 60
let isTimerRunning = false;
let initialCountdown = 60;

funcSetInt = () => {
    const animate = () => {
        timerPng.classList.add('timerStart')
    }
    const animateStop = () => {
        timerPng.classList.remove('timerStart')
    }
  startTimer = () => {
    // Check if timer is already running
    if (!isTimerRunning) {
      isTimerRunning = true;
      stopWatch = setInterval(function () {
        let res = initialCountdown--;
        animate()
        timerDisplay.innerHTML = res;
        if (initialCountdown < 0) {
          clearInterval(stopWatch);
          animateStop()
          isTimerRunning = false; // Reset the flag when timer stops
        }
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(stopWatch);
    isTimerRunning = false;
    animateStop() // Reset the flag when timer stops
  };

  document.addEventListener("click", (e) => {
    const elementBtn = e.target;
    if (elementBtn.id === "start") {
        if (initialCountdown < 0){
            initialCountdown = 60;
            startTimer();
        }
        else{

            startTimer()


        }
    }
    if (elementBtn.id === "stop") {
      stopTimer();
    }
  });


  
};

funcSetInt();
