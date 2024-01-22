let fromtodiv = document.getElementById("fromtodiv");
let toinput = document.getElementById("to");
let output = document.getElementById("output");
let output2 = document.getElementById("stats");
let livesdiv = document.getElementById("lives");
let play_again = document.getElementById("play_again");
let tovalue = 10;
let player_lives = 5;
let score = 0;
let dots = 1;
let loading = true;

let RandomNumber = Math.floor(Math.random() * tovalue + 1);

function updatenumbers(){
    tovalue = toinput.value
    RandomNumber = Math.floor(Math.random() * tovalue + 1);
}



setInterval(() => {
    if(loading === true){
        
        if(dots === 1){
            output.innerHTML = "Loading."
            dots = 2
        } else if(dots === 2){
            output.innerHTML = "Loading.."
            dots = 3
        } else if(dots === 3){
            output.innerHTML = "Loading..."
            dots = 1
        }
        
    }
}, 1000);

function Submit() {
    let playerinput = document.getElementById("player-input");
    console.log(RandomNumber);
    console.log(playerinput.value);
    

    if (playerinput.value) {
        
        if (parseFloat(playerinput.value) > tovalue) {
            playerinput.value = `Max is ${tovalue}!`;
        } 
        else {
            loading = false;
            fromtodiv.style.display = "none";
            

            if (player_lives > 0) {
                if (parseFloat(playerinput.value) == RandomNumber) {
                    output.innerHTML = "You Won!";
                    score += 1;
                    play_again.style.display = "flex";
                }
                else if (parseFloat(playerinput.value) > RandomNumber) {
                    output.innerHTML = "Your number is too high.";
                    player_lives -= 1;
                    livesdiv.innerHTML = `Lives: ${player_lives}`;
                }
                else if (parseFloat(playerinput.value) < RandomNumber) {
                    output.innerHTML = "Your number is too low.";
                    player_lives -= 1;
                    livesdiv.innerHTML = `Lives: ${player_lives}`;
                    
                }    
            } else {
                output.innerHTML = "You Lost!";
                output2.innerHTML = `Bot number: ${RandomNumber}`;
                play_again.style.display = "flex";
            }
        }
    }
}

function resetgame(){
    tovalue = 10;
    player_lives = 5;
    dots = 1;
    loading = true;
    RandomNumber = Math.floor(Math.random() * tovalue + 1);
    livesdiv.innerHTML = `Lives: ${player_lives}`;
    fromtodiv.style.display = "flex";
    play_again.style.display = "none";
    toinput.value = "";
    output2.innerHTML = ``;
}