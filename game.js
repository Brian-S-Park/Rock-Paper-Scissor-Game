let ans;
let compAns;
let test;
let comp_score=0;
let user_score=0;
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
const playerHand = document.getElementById("handpic2");
const compHand = document.getElementById("handpics");

function Rock(){
    ans=Rock_div.value;
    compare(ans);
    return ans;
}
function Paper(){
    ans=Paper_div.value;
    compare(ans);
    return ans;
}

function Scissor(){
    ans=Scissor_div.value;
    compare(ans);
    return ans;
}

function compare(){
    compAns=compchoice();
    if(user_score>=5 || comp_score>=5){
        Answer_div.innerHTML="Play Again?";
        ans="null";
    }
    if(ans=="Rock"){
        playerHand.src = '/img/Rock.png';
        if(compAns=="Paper"){
            compHand.src = '/img/Paper.png';
            Answer_div.innerHTML="Player Lost!";
            lose();
        }
        if(compAns=="Scissor"){
            compHand.src = '/img/Scissor.png';
            Answer_div.innerHTML="Player Won!";
            win();
        }
        if(compAns=="Rock"){
            compHand.src = '/img/Rock.png';
            Answer_div.innerHTML="Draw!";
            draw();
        }
    }
    if(ans=="Paper"){
        playerHand.src = '/img/Paper.png';
        if(compAns=="Paper"){
            compHand.src = '/img/Paper.png';
            Answer_div.innerHTML="Draw!";
            draw();
        }
        if(compAns=="Scissor"){
            compHand.src = '/img/Scissor.png';
            Answer_div.innerHTML="Player Lost!";
            lose();
        }
        if(compAns=="Rock"){
            compHand.src = '/img/Rock.png';
            Answer_div.innerHTML="Player Won!";
            win();
        }
    }
    if(ans=="Scissor"){
        playerHand.src = '/img/Scissor.png';
        if(compAns=="Paper"){
            compHand.src = '/img/Paper.png';
            Answer_div.innerHTML="Player Won!";
            win();
        }
        if(compAns=="Scissor"){
            compHand.src = '/img/Scissor.png';
            Answer_div.innerHTML="Draw!";
            draw();
        }
        if(compAns=="Rock"){
            compHand.src = '/img/Rock.png';
            Answer_div.innerHTML="Player Lost!";
            lose();
        }    
    }

}
function compchoice(){
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


Rock_div.addEventListener('click', function() {
    console.log("hey you clicked me!");
    updateimg();

})

Paper_div.addEventListener('click', function() {
    console.log("hey you clicked me!");
    updateimg();
})

Scissor_div.addEventListener('click', function() {
    console.log("hey you clicked me!");
})
function win(){
    user_score++;
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
    
    if(user_score===5 || comp_score===5){
        empty1=user_score;
        empty2=comp_score;
    }
    if(comp_score >= 5){
            Answer_div.innerHTML = "Play Again?";
            message_div.innerHTML = "You Lost the Game!";
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
    if(user_score===5 || comp_score===5){
        Answer_div.innerHTML = "Play Again?";
    }
}
function Reset(){
    user_score=0;
    comp_score=0;
    userscore_div.innerHTML = user_score;
    compscore_div.innerHTML = comp_score;
    Answer_div.innerHTML = "Answer";
    message_div.innerHTML = "";
    return;
}
