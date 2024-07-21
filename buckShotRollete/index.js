document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("intro-sound");
    audio.play().catch(function(error) {
        console.log("Audio play was prevented:", error);
    });

    let play = document.getElementById("play");
    let intro = document.getElementById("intro");
    let option = document.getElementById("option");
    
    play.onclick = function() {
        audio.pause();
        intro.classList.toggle("swipe-left");
        option.classList.toggle("swipe-right");
        document.getElementById("center-image").alt = "hi";
    };
});
