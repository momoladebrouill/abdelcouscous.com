console.log("Robot is starting...".repeat(10));
var song = new Audio("hello.mp3");
song.play();

function changeColor(newColor) {
    var elem = document.getElementById('para');
    song.play();
    r = Math.random() * 255;
    g = Math.random() * 255
    b = Math.random() * 255
    elem.style.color = "rgb(" + r + "," + g + "," + b + ")";
}