let gameseq=[];
let userseq=[];
let btns=['green','yellow','red','blue'];
let h3=document.querySelector("h3");
let started=false;
let level=0;

document.addEventListener("keyup",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
}


function levelup(){
    level++;
    userseq=[];
    h3.innerText=`level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let ranc=btns[ran];
    gameseq.push(ranc);
    let ranbtn=document.querySelector(`.${ranc}`);
    btnflash(ranbtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game over!,Your Score was <b>${level}</b>  <br>Press any key to start again`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function f(){
            document.querySelector('body').style.backgroundColor='white';
        },100);
        reset();
    }
}


function btnPress(){
    let btnn=this;
    btnflash(btnn);
    let userbtncolor=btnn.getAttribute("id");
    userseq.push(userbtncolor);
    

    checkAns(userseq.length-1);
}

let bottons=document.querySelectorAll('.btn');
for (b of bottons){
    b.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}