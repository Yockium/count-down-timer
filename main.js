const inputs = document.getElementById("inputs");
const start = document.getElementById("start");
const result = document.getElementById("result");
let resultString = "";
const timeValues = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};
let timeInSeconds;
let intervalId;

inputs.addEventListener("change", e => {
    const { name, value } = e.target;
    timeValues[name] = isNaN(parseInt(value)) ? 0 : parseInt(value);
    console.log(timeValues);
    timeInSeconds = (timeValues.hours*60*60)+(timeValues.minutes*60)+(timeValues.seconds);



});

start.addEventListener("click", e => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    if (timeValues.seconds > 0 && timeInSeconds) {
        intervalId = setInterval(countDownTimer, 1000);
    }
})

function countDown() {
    timeInSeconds--;
}

function countDownTimer() {
    if (timeInSeconds > 0) {
        countDown();
        const hours = Math.floor(timeInSeconds/3600).toString().padStart(2,"0");
        const minutes = Math.floor((timeInSeconds % 3600)/60).toString().padStart(2, "0");
        const seconds = Math.floor((timeInSeconds % 3600)%60).toString().padStart(2, "0");

        resultString = `${hours}:${minutes}:${seconds}`;
        result.innerText = resultString;
    }
    else {
        clearInterval(intervalId);
        intervalId = null;
        result.innerText = "Time's up!";
    }
}

