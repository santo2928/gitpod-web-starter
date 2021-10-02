button1 = document.getElementById("start");
button2 = document.getElementById("stop");

button1.onclick = countStart;
button2.onclick = countStop;

let startTime;
let nowTime;
let timerID;

let playing = 0;

function countStart(){
  if(playing){
    return;
  }
  playing = 1;
  startTime = performance.now();
  timerID = setInterval('counting()', 1);
}

function counting(){
  nowTime = performance.now();
  document.getElementById("cnt").innerText = (nowTime - startTime)/1000;
}

function countStop(){
  playing = 0;
  clearInterval(timerID);
}