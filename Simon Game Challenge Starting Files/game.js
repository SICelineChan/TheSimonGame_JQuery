let buttonColors = ["red","blue","green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];



$(".btn").click(function() {
    let userChosenColor = $(this).attr("id")
    console.log(userChosenColor)
    
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)

    playSound(userChosenColor)
    })

function nextSequence(){
    let randomNum = Math.floor(Math.random()*4);
    console.log(randomNum)
    let randomChosenColor = buttonColors[randomNum];
    console.log(randomChosenColor)
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);


// Dr Yu's solution
//     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     let audioRun = new Audio("sounds/" + randomChosenColor + ".mp3");
//   audioRun.play();
if (randomChosenColor ==="green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let greenAudio = new Audio("sounds/green.mp3");
        greenAudio.play();
    } else if (randomChosenColor === "red") {
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        let redAudio = new Audio("sounds/red.mp3");
        redAudio.play();
    } else if (randomChosenColor === "blue" ) {
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        let blueAudio = new Audio("sounds/blue.mp3");
        blueAudio.play();
    } else if (randomChosenColor === "yellow") {
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        let yellowAudio = new Audio("sounds/yellow.mp3");
        yellowAudio.play();
    }

}
function playSound (name) {
    let audioRun = new Audio("sounds/" + name + ".mp3")
    audioRun.play();
 }


