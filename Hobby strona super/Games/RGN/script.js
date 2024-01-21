let toinput = document.getElementById("to");
let tovalue = 10;
let guesses = 0;
let player_lives = 0;
let score = 0;
let loading = true;

function updatenumbers(){
    tovalue = toinput.value
}

while (loading === true){
    //interval ze loading czy cos i sie kropki zmieniaja ze np loading... loading.. loading. i to w pentli dopuki loading nie jest true
};

function Submit(){
    loading = false;
    let playerinput = document.getElementById("player-input")
    let RandomNumber = Math.floor(Math.random() * tovalue+1);

    if(playerinput.value)

    if(playerinput.value == RandomNumber){
        console.log(`Bot ${RandomNumber}`)
        console.log(`Player ${playerinput.value}`)
        console.log("Player Wins!")
    } else if(playerinput.value != RandomNumber){
        console.log(`Bot ${RandomNumber}`)
        console.log(`Player ${playerinput.value}`)
        console.log("Bot Wins!")
    } else{
        console.log(`Bot ${RandomNumber}`)
        console.log(`Player ${playerinput.value}`)
        console.log("Error")
    }
}