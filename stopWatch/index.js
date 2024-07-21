let display = document.getElementById("display");

let timer = null
let startTime = 0;
let elaplsedTime = 0;
let isRunning = false;

function start() {

    if(!isRunning) {
        startTime = Date.now() - elaplsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {

    if(isRunning) {
        clearInterval(timer)
        elaplsedTime = Date.now() - startTime
        isRunning = false
    }

}

function reset(isRunning) {
    clearInterval(timer)
    startTime = 0;
    elaplsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {
    const currentTime = Date.now();
    elaplsedTime = currentTime - startTime;

    let hours = Math.floor(elaplsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let mins = Math.floor(elaplsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let secs = Math.floor(elaplsedTime / 1000 % 60).toString().padStart(2, 0);
    let msecs = Math.floor(elaplsedTime % 1000 / 10).toString().padStart(2, 0);

    display.textContent = `${hours}:${mins}:${secs}:${msecs}`
}