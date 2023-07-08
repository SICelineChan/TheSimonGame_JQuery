let buttonColors = ["red","blue","green", "yellow"]
let gamePattern = [];

function nextSequence(){
    let randomNum = Math.floor(Math.random()*4);
    console.log(randomNum)
    let randomChosenColor = buttonColors[randomNum];
    console.log(randomChosenColor)
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

if (randomChosenColor ==="green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let greenAudio = new Audio("sounds/green.mp3");
        greenAudio.play();
    } else if (randomChosenColor === "red") {
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    } else if (randomChosenColor === "blue" ) {
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    } else if (randomChosenColor === "yellow") {
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }

}
nextSequence();


