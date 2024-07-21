// Get DOM elements
let number = document.getElementById("number");
let button = document.getElementById("btn");
let algo = document.getElementById("algs");
let lists = document.getElementById("lists");

let record;

let moves = [
    "L", "R", "U", "D", "F", "B",
    "L'", "R'", "U'", "D'", "F'", "B'",
    "L2", "R2", "U2", "D2", "F2", "B2"
];

algo.textContent = generateMoves(20);

function generateMoves(count) {
    let algs = '';
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * moves.length);
        algs += moves[randomIndex] + ', ';
    }
    return algs.trim();
}

let counter = 0;
let timerRunning = false;
let intervalId = null;

button.onclick = function () {
    if (timerRunning) {
        clearInterval(intervalId);
        timerRunning = false;
        button.textContent = "Start";
        record = counter;
        counter = 0;
        algo.textContent = generateMoves(20);
        lists.textContent = record + "\n";
    } else {
        intervalId = setInterval(() => {
            counter++;
            number.textContent = counter;
        }, 1000);
        timerRunning = true;
        button.textContent = "Stop";
        number.textContent = 0;
    }
};
