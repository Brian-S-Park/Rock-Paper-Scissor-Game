let ans;
let compAns;
let test;
let comp_score=0;
let user_score=0;
const Answer_div=document.getElementById("Answer");
const Rock_div=document.getElementById("Rock");
const Paper_div=document.getElementById("Paper");
const Scissor_div=document.getElementById("Scissor");
const compscore_div=document.getElementById("compscore");
const userscore_div=document.getElementById("userscore");



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
    if(ans=="Rock"){
        if(compAns=="Paper"){
            Answer_div.innerHTML="Player Lost!";
            lose();
        }
        if(compAns=="Scissor"){
            Answer_div.innerHTML="Player Won!";
            win();
        }
        if(compAns=="Rock"){
            Answer_div.innerHTML="Draw!";
        }
    }
    if(ans=="Paper"){
        if(compAns=="Paper"){
            Answer_div.innerHTML="Draw!";
        }
        if(compAns=="Scissor"){
            Answer_div.innerHTML="Player Lost!";
            lose();
        }
        if(compAns=="Rock"){
            Answer_div.innerHTML="Player Won!";
            win();
        }
    }
    if(ans=="Scissor"){
        if(compAns=="Paper"){
            Answer_div.innerHTML="Player Won!";
            win();
        }
        if(compAns=="Scissor"){
            Answer_div.innerHTML="Draw!";
        }
        if(compAns=="Rock"){
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
function updateimg(){
    handpic.src=""
}
Rock_div.addEventListener('click', function() {
    console.log("hey you clicked me!");

})

Paper_div.addEventListener('click', function() {
    console.log("hey you clicked me!");
})

Scissor_div.addEventListener('click', function() {
    console.log("hey you clicked me!");
})
function win(){
    user_score++;
    userscore_div.innerHTML = user_score;
}
function lose(){
    comp_score++;
    compscore_div.innerHTML = comp_score;
}