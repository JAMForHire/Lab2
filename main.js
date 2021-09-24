function flip1(card){
  document.getElementById(card).classList.add("inner2");
  //Flips the card to the analysis side
  document.getElementById(card).scrollIntoView();
  //Makes it so it scrolls to the top when you click the flip button
}

function flip2(card){
  document.getElementById(card).classList.remove("inner2");
  //Flips the card to the constitution text side.
  document.getElementById(card).scrollIntoView();
  //Makes it so it scrolls to the top when you click the flip button
}
