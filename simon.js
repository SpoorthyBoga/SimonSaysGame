
let start=false;
let level=0;

let gameseq=[];
let urseq=[];
let h3=document.querySelector("h3");

let btns=["red", "yellow", "blue", "green"];
let h2=document.querySelector("h2");

document.addEventListener("keypress", function ()
{
    if(start==false)
    {
        console.log("game started");
        start=true;
        h3.innerText=``;
    }

    levelup();
 
});

function checkans(idx){
   if(urseq[idx]===gameseq[idx])
   {
    if(urseq.length==gameseq.length)
    {
        setTimeout(levelup,1000);
    }
   }
   else
   {
    let score=gameseq.length-1;
    h2.innerText=`Game over! \n SCORE : ${score}`;
    h3.innerText="press a key to continue";
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"   
    },100)
    reset();
   }
}

function levelup() {
    urseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rindex =Math.floor(Math.random()*3);
    console.log(rindex);
    let rbtn=btns[rindex];
    let rcolor=document.querySelector(`.${rbtn}`);
    gameseq.push(rbtn);
    btnflash(rcolor);
}

function btnflash(rcolor) {
    rcolor.classList.add("flash");
    setTimeout(function ()
{rcolor.classList.remove("flash")}, 200)
};

function userflash(btn) {
    btn.classList.add("flash");
    setTimeout(function ()
{btn.classList.remove("flash")}, 200)
};


function btnclick(){
    let btn=this;
    userflash(btn);
    let ubtn= btn.getAttribute("id");
    console.log(ubtn);
    urseq.push(ubtn);
    checkans(urseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
   btn.addEventListener("click", btnclick);
}

function reset(){
    start=false;
    gameseq=[];
    urseq=[];
    level=0;
}