function flip1(card){
  document.getElementById(card).classList.add("inner2");
  document.getElementById(card).scrollIntoView();
}

function flip2(card){
  document.getElementById(card).classList.remove("inner2");
  document.getElementById(card).scrollIntoView();
}
