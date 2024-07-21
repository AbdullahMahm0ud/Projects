function myColor() {
    var color = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = color;

    document.getElementById("box").innerHTML = color;
}

document.getElementById("colorSelect").addEventListener('input', myColor);