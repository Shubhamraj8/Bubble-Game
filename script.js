var timer = 60;
var score = 0;
var hitNo = 0;
function makeBubble() {
    var clutter = "";
    for(var i=1; i<150; i++){
        var inside = Math.floor(Math.random()*20);
        clutter += `<div class="bubble">${inside}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter
}

function runTimer(){
    var timing = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timing);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000)
}

function getnewHit(){
    hitNo = Math.floor(Math.random()*20);
    document.querySelector("#hitval").textContent = hitNo;
}

function increaseScore(){
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent))
    if(clickednum === hitNo) {
        increaseScore();
        makeBubble();
        getnewHit();
    }
});

makeBubble();
runTimer();
getnewHit();
