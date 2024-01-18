let player1output = document.getElementById("player1-score");
let botoutput = document.getElementById("player2-score");

let output = document.getElementById("output");

let player1score = 0;
let Botscore = 0;

function Rock(){
    playerguessednumber = 0;
    checkifwin();
}
function Paper(){
    playerguessednumber = 1;
    checkifwin();
}
function Scissors(){
    playerguessednumber = 2;
    checkifwin();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        document.getElementById("A").classList.add("clicked");
        Rock();
        setTimeout(function(){ document.getElementById("A").classList.remove("clicked"); }, 190);
    } else if (event.key === "s") {
        document.getElementById("S").classList.add("clicked");
        Paper();
        setTimeout(function(){ document.getElementById("S").classList.remove("clicked"); }, 190);
    } else if (event.key === "d") {
        document.getElementById("D").classList.add("clicked");
        Scissors();
        setTimeout(function(){ document.getElementById("D").classList.remove("clicked"); }, 190);
    }
});


function checkifwin(){
    let RandomNumber = Math.floor(Math.random() * 2);
    if(playerguessednumber === RandomNumber){
        output.innerHTML = "Draw";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 0 && RandomNumber === 1){
        Botscore++;
        botoutput.innerHTML = `Bot: ${Botscore}`;
        output.innerHTML = "Bot Wins with Paper";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 0 && RandomNumber === 2){
        player1score++;
        player1output.innerHTML = `Player: ${player1score}`;
        output.innerHTML = "You Win with Rock";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 1 && RandomNumber === 0){
        player1score++;
        player1output.innerHTML = `Player: ${player1score}`;
        output.innerHTML = "You win with Paper";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 1 && RandomNumber === 2){
        Botscore++;
        botoutput.innerHTML = `Bot: ${Botscore}`;
        output.innerHTML = "Bot Wins with Scissors";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 2 && RandomNumber === 0){
        Botscore++;
        botoutput.innerHTML = `Bot: ${Botscore}`;
        output.innerHTML = "Bot Wins with Rock";
        playerguessednumber = 0;
    }
    else if(playerguessednumber == 2 && RandomNumber === 1){
        player1score++;
        player1output.innerHTML = `Player: ${player1score}`;
        output.innerHTML = "You Win with Scissors";
        playerguessednumber = 0;
    }
    else{
        output.innerHTML = "Error";
        console.log(RandomNumber)
        console.log(playerguessednumber)
        playerguessednumber = 0;
    }
}