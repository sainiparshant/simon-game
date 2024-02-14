let gameSque = [];
let userSque = [];

let btns = ["red","green","yellow","blue"];

let h4 = document.querySelector("h4");
let started=false;
let level = 0;


document.addEventListener("keypress", function(){
   if(started == false){
    console.log("started");
    started = true;
   }
   levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSque = [];
    level ++;
    h4.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSque.push(randColor);
    console.log(gameSque);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSque[idx] === gameSque[idx]){
        if(userSque.length == gameSque.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h4.innerText = `Game Over ! score is ${level-1} Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSque.push(userColor);
    console.log(userSque); 

    checkAns(userSque.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);   
}

function reset(){
    started = false;
    gameSque = [];
    userSque = [];
    level =0;
}

