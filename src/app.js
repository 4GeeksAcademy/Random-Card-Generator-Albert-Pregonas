import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  generateRandomCard();
  document.getElementById("hidden").addEventListener('click', generateRandomCard); //al hacer click genera una carta random

  document.getElementById("width").addEventListener('input', updateCardSize);
  document.getElementById("height").addEventListener('input', updateCardSize);
};

//modifica el tamaño de las cartas
function updateCardSize() {
  let widthInput = document.getElementById("width").value.trim(); 
  let heightInput = document.getElementById("height").value.trim();

  let width = widthInput ? widthInput + "px" : "50vh";  
  let height = heightInput ? heightInput + "px" : "70vh";

  let card1 = document.getElementById("actualCard");
  if (card1) {
    card1.style.width = width;
    card1.style.height = height;
  }

  let card2 = document.getElementById("hidden");
  if (card2) {
    card2.style.width = width;
    card2.style.height = height;
  }

  //modifica el font-size
  let topSuit = document.getElementById("topSuit");
  let bottomSuit = document.getElementById("bottomSuit");
  let cardContent = document.getElementById("cardContent");

  if (card1) {
    let suitSize, numberSize;
  
    if (card1.offsetWidth <= 125 || card1.offsetHeight <= 125) {
      suitSize = "1.5em";
      numberSize = "2em";
    } else if (card1.offsetWidth <= 200 || card1.offsetHeight <= 200) {
      suitSize = "3em";
      numberSize = "4em";
    } else {
      suitSize = "6em";
      numberSize = "8em";
    }

    if (topSuit) topSuit.style.fontSize = suitSize;
    if (bottomSuit) bottomSuit.style.fontSize = suitSize;
    if (cardContent) cardContent.style.fontSize = numberSize;
    }
  }

let generateRandomCard = () => {
  let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["diamonds", "spades", "clubs", "hearts"];
  let suitSymbols = {
    diamonds: "♦",
    spades: "♠",
    clubs: "♣",
    hearts: "♥"
  };

  let randomCardIndex = Math.floor(Math.random() * cards.length);
  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  
  let selectedCard = cards[randomCardIndex];
  let selectedSuit = suits[randomSuitIndex];
  let suitSymbol = suitSymbols[selectedSuit];

  document.getElementById("cardContent").innerHTML = selectedCard;
  document.getElementById("topSuit").innerHTML = suitSymbol;
  document.getElementById("bottomSuit").innerHTML = suitSymbol;

  let e = document.getElementById("actualCard");
  e.className = "card " + suitSelect(selectedSuit);
};

let suitSelect = (suit) => {
  switch (suit) {
    case "diamonds": return "suit-diamonds";
    case "spades": return "suit-spades";
    case "hearts": return "suit-hearts";
    case "clubs": return "suit-clubs";
    default: return "";
  }
};

//para generar una carta nueva cada 10 segundos
setInterval(() => {
  generateRandomCard();
}, 10000);