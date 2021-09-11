function diceGame(){
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;

  const randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
  
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h2").innerHTML = "Draw!";
  }
}
