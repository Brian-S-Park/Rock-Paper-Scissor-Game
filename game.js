//11-9 remember to make the white box bigger for full screen and center logo and name at bottom

let ans;
let compAns;
let test;
let comp_score=0;
let user_score=0;
let click=0;
let empty1;
let empty2;
const Answer_div=document.getElementById("Answer");
const Rock_div=document.getElementById("Rock");
const Paper_div=document.getElementById("Paper");
const Scissor_div=document.getElementById("Scissor");
const compscore_div=document.getElementById("compscore");
const userscore_div=document.getElementById("userscore");
const message_div=document.getElementById("message");
const reset_div=document.getElementById("reset");
const playerHand=document.getElementById("handpic2");
const compHand=document.getElementById("handpics");


function Rock(){
    //Makes sure that button is not clicked multiple times
    click++;
    if(click===1){
        ans=Rock_div.value;
        compare(ans);
    }
    setTimeout(() => {click=0;}, 2100);
}
function Paper(){
    click++;
    if(click===1 && ans!=="null"){
        ans=Paper_div.value;
        compare(ans);
    }
    setTimeout(() => {click=0;}, 2100);
}
function Scissor(){
    click++;
    if(click===1){
        ans=Scissor_div.value;
        compare(ans);
    }
    setTimeout(() => {click=0;}, 2100);
}

function compare(){
    compAns=compchoice();
    //Checks if 5 rounds have been played yet
    if(user_score>=5 || comp_score>=5){
        Answer_div.innerHTML="Play Again?";
        ans="null";
    }
    animation();
    //compares all the choices
    if(ans==="Rock"){
        setTimeout(() =>{
            playerHand.src = '/img/Rock.png';
            if(compAns==="Paper"){
                compHand.src = '/img/Paper.png';
                lose();
            }
            if(compAns==="Scissor"){
                compHand.src = '/img/Scissor.png';
                win();
            }
            if(compAns==="Rock"){
                compHand.src = '/img/Rock.png';
                draw();
            }
            playerHand.style.animation = "reset";
            compHand.style.animation = "reset";
        }, 2100);
    }
    if(ans==="Paper"){
        setTimeout(() =>{
                playerHand.src = '/img/Paper.png';

            if(compAns==="Paper"){
                compHand.src = '/img/Paper.png';
                draw();
            }
            if(compAns==="Scissor"){
                compHand.src = '/img/Scissor.png';
                lose();
            }
            if(compAns==="Rock"){
                compHand.src = '/img/Rock.png';
                win();
            }
            playerHand.style.animation = "reset";
            compHand.style.animation = "reset";
        }, 2100);
    }
    if(ans==="Scissor"){
        setTimeout(() =>{
                playerHand.src = '/img/Scissor.png';
            if(compAns==="Paper"){
                compHand.src = '/img/Paper.png';
                win();
            }
            if(compAns==="Scissor"){
                compHand.src = '/img/Scissor.png';
                draw();
            }
            if(compAns==="Rock"){
                compHand.src = '/img/Rock.png';
                lose();
            }
            playerHand.style.animation = "reset";
            compHand.style.animation = "reset";
        }, 2100);
    }
}

function compchoice(){
    //Generates the computer's choice
    test=Math.random(); 
    if(test<=.34){
        compAns="Rock";
    }
    else if(test>.34 && test<=.67){
        compAns="Paper";
    }
    else{
        compAns="Scissor";
    } 
    return compAns;
}

function win(){
    user_score++;
    Answer_div.style.color="green";
    Answer_div.innerHTML="Player Won!";
    if(user_score===5 || comp_score===5){
        empty1=user_score;
        empty2=comp_score;
    }
    if(user_score >= 5){
            Answer_div.innerHTML = "Play Again?";
            message_div.innerHTML = "You Won the Game!";
            message_div.style.color="green";
            user_score=empty1;
            comp_score=empty2;
            userscore_div.innerHTML=empty1;
            compscore_div.innerHTML=empty2;
        }
        else if(user_score<5 && comp_score<5){
            userscore_div.innerHTML = user_score;
        }
}

function lose(){
    comp_score++;
    Answer_div.style.color="red";
    Answer_div.innerHTML="Player Lost!";
    if(user_score===5 || comp_score===5){
        empty1=user_score;
        empty2=comp_score;
    }
    if(comp_score >= 5){
            Answer_div.innerHTML = "Play Again?";
            message_div.innerHTML = "Game Over!";
            message_div.style.color="red";
            user_score=empty1;
            comp_score=empty2;
            userscore_div.innerHTML=empty1;
            compscore_div.innerHTML=empty2;
    }
    else if(user_score<5 && comp_score<5){
        compscore_div.innerHTML = comp_score;
    }
}

function draw(){
    Answer_div.style.color="black";
    Answer_div.innerHTML="Draw!";
    if(user_score===5 || comp_score===5){
        Answer_div.innerHTML = "Play Again?";
    }
}

function Reset(){
    user_score=0;
    comp_score=0;
    ans=0;
    compAns=0;
    userscore_div.innerHTML = user_score;
    compscore_div.innerHTML = comp_score;
    Answer_div.innerHTML = "";
    message_div.innerHTML = "";
    playerHand.src = '/img/Rock.png';
    compHand.src = '/img/Rock.png';
    playerHand.style.animation = "reset";
    compHand.style.animation = "reset";
    return;
}

function animation(){
    //animates the hands and outputs the answer
    playerHand.src='/img/Rock.png';
    compHand.src='/img/Rock.png';
    Answer_div.innerHTML = "";
    playerHand.style.animation = "shakePlayer 2s ease";
    compHand.style.animation = "shakeComp 2s ease";
}