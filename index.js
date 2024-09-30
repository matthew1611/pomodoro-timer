const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    timerEl.innerHTML = formattedTime;
}

function startTimer(){

    interval = setInterval( ()=>{
        timeLeft--;
        updateTimer();
    }, 1000);
}

function stopTimer(){
    console.log("stop");
}

function resetTimer(){
    console.log("reset");
}


startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);