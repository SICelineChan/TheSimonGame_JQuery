let buttonColors = ["red","blue","green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];



$(".btn").click(function() {
    // when user click "this" which this button is, it will show the chosen color's id
    // say if I clicked the red square, "this" will become the red square with the id red in the html
    let userChosenColor = $(this).attr("id")
    console.log(userChosenColor)
    //whenever the user clicked a square this will push the color into the empty array of userClickedPattern
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
    //the function to play the sound will play the corresponding sound of the square.
    //as the playSound function has the (name) as the param
    playSound(userChosenColor)
    })

function nextSequence(){
    let randomNum = Math.floor(Math.random()*4);
    console.log(randomNum)
    //the buttonColors is an array and it could be any randomNum, buttonColors[2] or [1]
    let randomChosenColor = buttonColors[randomNum];
    console.log(randomChosenColor)
    //here the gamePattern is an empty array and we push the randomChosenColor into this empty array
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
//since all mp3 files have the name of the colour, hence concat. to make the audio runs!
function playSound (name) {
    let audioRun = new Audio("sounds/" + name + ".mp3")
    audioRun.play();
 }


