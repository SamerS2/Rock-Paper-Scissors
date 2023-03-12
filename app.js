
var playerChoice = null;

function showRock() {
    let image = document.getElementById("playerImage");
    image.src = "./images/rock.jpg";
    playerChoice = 1;
}
function showPaper() {
    let image = document.getElementById("playerImage");
    image.src = "./images/paper.jpg";
    playerChoice = 2
}
function showScissor() {
    let image = document.getElementById("playerImage");
    image.src = "./images/scissors.jpg";
    playerChoice = 3;
}

document.getElementById("rock").addEventListener("click", showRock);
document.getElementById("paper").addEventListener("click", showPaper);
document.getElementById("scissors").addEventListener("click", showScissor);

var counter = 0;

function startRound() {
    let random = Math.floor((Math.random() * 3) + 1);
    let botChoice = document.getElementById("botImage");

    if (playerChoice == null){
        return;
    }
    //
    if (random === 1) {
        botChoice.src = "./images/rock.jpg";
    } else if (random === 2) {
        botChoice.src = "./images/paper.jpg";
    } else {
        botChoice.src = "./images/scissors.jpg";
    }

    if (counter === 3) {
        document.getElementById("round1").style.backgroundColor = "white";
        document.getElementById("round2").style.backgroundColor = "white";
        document.getElementById("round3").style.backgroundColor = "white";
        counter = 0;
    }

    counter++;
    if (playerChoice === 1 && random === 2 || playerChoice === 2 && random === 3 || playerChoice === 3 && random === 1) {
        //bot wins
        //player loses 
        document.getElementById("round" + String(counter)).style.backgroundColor = "red";
    } else if (playerChoice === random) {
        //tie 
        document.getElementById("round" + String(counter)).style.backgroundColor = "yellow";
    } else {
        //player wins
        document.getElementById("round" + String(counter)).style.backgroundColor = "lime";
    }
}
document.getElementById("startGame").addEventListener("click", startRound);