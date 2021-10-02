function clicked(){
  tmp = Math.random();
  if(tmp < 0.2){
    document.write("大吉");
  }
  else if(tmp < 0.7){
    document.write("吉");
  }
  else{
    document.write("凶");
  }
}

let button = document.getElementById("omikuji");
button.onclick = clicked;