/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let courtCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "♚", "♛", "J"];

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

  function colorRight() {
    if (resultRandomSuit === "♦") {
      right.classList.add("diamond");
    } else if (resultRandomSuit === "♥") {
      right.classList.add("heart");
    } else if (resultRandomSuit === "♠") {
      right.classList.add("spade");
    } else {
      right.classList.add("club");
    }
  }

  function colorLeft() {
    if (resultRandomSuit === "♦") {
      left.classList.add("diamond");
    } else if (resultRandomSuit === "♥") {
      left.classList.add("heart");
    } else if (resultRandomSuit === "♠") {
      left.classList.add("spade");
    } else {
      left.classList.add("club");
    }
  }

  let emoji1 = resultRandomSuit + colorRight();
  let emoji2 = resultRandomSuit + colorLeft();
};

// Agregar un botón que genere una nueva carta cuando sea apretado

let refreshCard = document.getElementById("refresh");
refreshCard.addEventListener("click", () => {
  location.reload();
});

// Agregar un timer que genere una nueva carta automaticamente cada 10 segundos

setTimeout(function() {
  window.location.reload();
}, 10000);
