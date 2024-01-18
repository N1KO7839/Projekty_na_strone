// Paddles
let leftPaddle = document.getElementById('left-paddle');
let rightPaddle = document.getElementById('right-paddle');

const paddleTopMin = 55;
const paddleBottomMax = 445;
const paddleMovement = 24;

leftPaddle.style.top = '250px';
rightPaddle.style.top = '250px';

// Arrows
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        movePaddle(rightPaddle, -paddleMovement);
    } else if (event.key === 'ArrowDown') {
        movePaddle(rightPaddle, paddleMovement);
    }
});

// Buttons
document.addEventListener('keydown', function (event) {
    const lowercaseKey = event.key.toLowerCase();
    if (lowercaseKey === 'w') {
        movePaddle(leftPaddle, -paddleMovement);
    } else if (lowercaseKey === 's') {
        movePaddle(leftPaddle, paddleMovement);
    }
});

// Y Max & Bottoms
function movePaddle(paddle, movement) {
    let currentPos = parseInt(paddle.style.top || 0);
    if (currentPos + movement >= paddleTopMin && currentPos + movement <= paddleBottomMax) {
        paddle.style.top = currentPos + movement + "px";
    } else {
        console.log(paddle.id + " has reached the max");
    }
}

// Ball
const ball = document.querySelector('.ball');
const gameContainer = document.querySelector('.game-container');
let announcement = document.querySelector('.announcement')

//Sites but it's paddles location
const site1 = 50;
const site2 = 800;

ball.style.left = `${site2}px`;

// Random Speed Y
let RY = Math.floor(Math.random() * 3.5);

// Ball parametrs
let ballX = 425;
let ballY = 250;
let ballSpeedX = 2;
let ballSpeedY = RY;

function moveBall() {
    let padd1currentpos = parseInt(leftPaddle.style.top || 0);
    let padd2currentpos = parseInt(rightPaddle.style.top || 0);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // To check
    /*
    console.log(`Left Paddle Top: ${padd1currentpos}`);
    console.log(`Left Paddle Bottom: ${parseInt(padd1currentpos + 100)}`);
    */

    // Check collision with the top and bottom borders
    if (ballY <= 0 || ballY >= 490) {
        ballSpeedY = -ballSpeedY; // Bounce off the top or bottom
    }

    // Check collision with the left paddle then bounce
    if (ballX <= site1 && isBallTouchingPaddle(leftPaddle)) {
        //Set Speeds
        let RYF = Math.floor(Math.random() * 3.5);
        ballSpeedY = RYF
        ballSpeedX = 2.5;
    }

    // Check collision with the right paddle then bounce
    if (ballX >= site2 && isBallTouchingPaddle(rightPaddle)) {
        //Set Speeds
        let RYF = Math.floor(Math.random() * 3.5);
        ballSpeedY = RYF
        ballSpeedX = -2.5;
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

function isBallTouchingPaddle(paddle) {
    const paddleTop = parseInt(paddle.style.top || 0) - 50;
    const paddleBottom = paddleTop + 100;
    const paddleHitbox = { top: paddleTop, bottom: paddleBottom };

    // Check if the ball top position is correct like paddle's hitbox
    return ballY >= paddleHitbox.top && ballY <= paddleHitbox.bottom;
}

function stopGame() {
    console.log("Game Over");
    // Who is the winner?
    if(ball.style.left >= "50%"){
        announcement.innerHTML = 'Left Wins!'
    } else{
        announcement.innerHTML = 'Right Wins!'
    }
}

function gameLoop() {
    moveBall();

    // Checks
    if (ballX <= site1 && !isBallTouchingPaddle(leftPaddle)) {
        console.log("Game Over - Ball at the left paddle position without touching");
        stopGame();
        return; // Stop the game
    }

    // Checks
    if (ballX >= site2 && !isBallTouchingPaddle(rightPaddle)) {
        console.log("Game Over - Ball at the right paddle position without touching");
        stopGame();
        return; // Stop the game
    }

    // Checks
    if (ballX < 0 || ballX > 900) {
        console.log("Game Over - Ball out of bounds");
        stopGame();
        return; // Stop the game
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();