let li = [];
const add = document.getElementById("add");
const list = document.getElementById("list");

function addOnn() {
    const text = document.getElementById("text").value;

    if(text !== '') {
        li.push(text);
        updateList();
    } else{
        console.log("Error")
        return '';
    }

    function updateList() {
        list.innerHTML = '';
        li.forEach(item => {
            const liElement = document.createElement('li');
            liElement.textContent = item;
            list.appendChild(liElement);
        });
    }
    
}

const switchh = document.getElementById("switchh");
const container = document.getElementById("container");
const body = document.getElementById("body");
const ball = document.getElementById("ball");
let isMovingForward = false;
ball.addEventListener("click", toggleMove);

function toggleMove() {
    isMovingForward = !isMovingForward;
    if (isMovingForward) {
        ball.style.transform = "translateX(40px)";
        ball.style.backgroundColor = "black"
        body.style.backgroundColor = "black"
        ball.style.borderColor = "white"
        container.style.color = "white"
        container.style.borderColor = "white"
        switchh.style.backgroundColor = "white"

    } else {
        ball.style.transform = "translateX(0)";
        ball.style.backgroundColor = "white"
        ball.style.borderColor = "black"
        body.style.backgroundColor = "white"
        container.style.color = "black"
        container.style.borderColor = "black"
        switchh.style.backgroundColor = "black"
    }
}
