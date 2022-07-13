/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let courtCards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "King", "Queen", "Jack"];

  const generateCard = array => {
    let randomCard = Math.floor(Math.random() * array.length);
    return array[randomCard];
  };

  const resultRandomSuit = generateCard(suits);
  const right = document.getElementById("rightSuit");
  const left = document.getElementById("leftSuit");
  const randomCourt = document.getElementById("courtCard");

  right.innerHTML = resultRandomSuit;
  left.innerHTML = resultRandomSuit;
  randomCourt.innerHTML = generateCard(courtCards);
};
