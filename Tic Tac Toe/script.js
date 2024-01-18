let a1 = document.querySelector('#a1')
let a2 = document.querySelector('#a2')
let a3 = document.querySelector('#a3')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let c1 = document.querySelector('#c1')
let c2 = document.querySelector('#c2')
let c3 = document.querySelector('#c3')

let unclaimed = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
let notifications = document.querySelector('#Notification')
let restartbtn = document.querySelector('#Restart')
let stopgame = false
let xlist = []
let olist = []
let oorx = 1

//Button Clicks
function a1click(){
    if(stopgame === false){
        let buttonname = "a1"
        if (unclaimed.includes(a1)){
            unclaimed.splice(unclaimed.indexOf(a1), 1)
            clicked(buttonname)
        }
    }
}

function a2click(){
    if(stopgame === false){
        let buttonname = "a2"
        if (unclaimed.includes(a2)){
            unclaimed.splice(unclaimed.indexOf(a2), 1)
            clicked(buttonname)
        }
    }
}

function a3click(){
    if(stopgame === false){
        let buttonname = "a3"
        if (unclaimed.includes(a3)){
            unclaimed.splice(unclaimed.indexOf(a3), 1)
            clicked(buttonname)
        }
    }
}

function b1click(){
    if(stopgame === false){
        let buttonname = "b1"
        if (unclaimed.includes(b1)){
            unclaimed.splice(unclaimed.indexOf(b1), 1)
            clicked(buttonname)
        }
    }
}

function b2click(){
    if(stopgame === false){
        let buttonname = "b2"
        if (unclaimed.includes(b2)){
            unclaimed.splice(unclaimed.indexOf(b2), 1)
            clicked(buttonname)
        }
    }
}

function b3click(){
    if(stopgame === false){
        let buttonname = "b3"
        if (unclaimed.includes(b3)){
            unclaimed.splice(unclaimed.indexOf(b3), 1)
            clicked(buttonname)
        }
    }
}

function c1click(){
    if(stopgame === false){
        let buttonname = "c1"
        if (unclaimed.includes(c1)){
            unclaimed.splice(unclaimed.indexOf(c1), 1)
            clicked(buttonname)
        }
    }
}

function c2click(){
    if(stopgame === false){
        let buttonname = "c2"
        if (unclaimed.includes(c2)){
            unclaimed.splice(unclaimed.indexOf(c2), 1)
            clicked(buttonname)
        }
    }
}

function c3click(){
    if(stopgame === false){
        let buttonname = "c3"
        if (unclaimed.includes(c3)){
            unclaimed.splice(unclaimed.indexOf(c3), 1)
            clicked(buttonname)
        }
    }
}

//Game Logic
function clicked(buttonname){
    let square;
    if(buttonname === "a1"){square = a1}else if(buttonname === "a2"){square = a2}else if(buttonname === "a3"){square = a3}else if(buttonname === "b1"){square = b1}else if(buttonname === "b2"){square = b2}else if(buttonname === "b3"){square = b3}else if(buttonname === "c1"){square = c1}else if(buttonname === "c2"){square = c2}else if(buttonname === "c3"){square = c3};
    if (oorx === 1){
        //Adds to list and sort it
        xlist.push(square)
        table = "x"
        sort("x")

        //Other things
        square.innerHTML = "X"
        square.classList.remove("unclaimed")
        oorx = 2
    } else if (oorx === 2){
        //Adds to list and sort it
        olist.push(square)
        table = "o"
        sort("o")

        //Other things
        square.innerHTML = "O"
        square.classList.remove("unclaimed")
        oorx = 1
    }
    checkwin()
}

function sort(table) {
    if (table === "x") {
        xlist.sort((a, b) => a.id.localeCompare(b.id));
    } else if (table === "o") {
        olist.sort((a, b) => a.id.localeCompare(b.id));
    }
}

function checkwin(){
    if(xlist.includes(a1) && xlist.includes(a2) && xlist.includes(a3)||xlist.includes(b1) && xlist.includes(b2) && xlist.includes(b3)||xlist.includes(c1) && xlist.includes(c2) && xlist.includes(c3)||xlist.includes(a1) && xlist.includes(b1) && xlist.includes(c1)||xlist.includes(a2) && xlist.includes(b2) && xlist.includes(c2)||xlist.includes(a3) && xlist.includes(b3) && xlist.includes(c3)||xlist.includes(a1) && xlist.includes(b2) && xlist.includes(c3)||xlist.includes(a3) && xlist.includes(b2) && xlist.includes(c1)){
        notifications.innerHTML = "X Won"
        stopgamefunc()
    } else if(olist.includes(a1) && olist.includes(a2) && olist.includes(a3)||olist.includes(b1) && olist.includes(b2) && olist.includes(b3)||olist.includes(c1) && olist.includes(c2) && olist.includes(c3)||olist.includes(a1) && olist.includes(b1) && olist.includes(c1)||olist.includes(a2) && olist.includes(b2) && olist.includes(c2)||olist.includes(a3) && olist.includes(b3) && olist.includes(c3)||olist.includes(a1) && olist.includes(b2) && olist.includes(c3)||olist.includes(a3) && olist.includes(b2) && olist.includes(c1)){
        notifications.innerHTML = "O Won"
        stopgamefunc()
    } else if(unclaimed.length === 0){
        notifications.innerHTML = "Draw"
        stopgamefunc()
    }
}

function stopgamefunc(){
    restartbtn.style.display = "flex";
    stopgame = true;
    a1.classList.remove("unclaimed");
    a2.classList.remove("unclaimed");
    a3.classList.remove("unclaimed");
    b1.classList.remove("unclaimed");
    b2.classList.remove("unclaimed");
    b3.classList.remove("unclaimed");
    c1.classList.remove("unclaimed");
    c2.classList.remove("unclaimed");
    c3.classList.remove("unclaimed");
}

function Restart(){
    stopgame = false;
    a1.classList.add("unclaimed");
    a2.classList.add("unclaimed");
    a3.classList.add("unclaimed");
    b1.classList.add("unclaimed");
    b2.classList.add("unclaimed");
    b3.classList.add("unclaimed");
    c1.classList.add("unclaimed");
    c2.classList.add("unclaimed");
    c3.classList.add("unclaimed");
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    notifications.innerHTML = "";
    unclaimed = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
    xlist = []
    olist = []
    oorx = 1
    restartbtn.style.display = "none";
};