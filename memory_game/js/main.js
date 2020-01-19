
const cards = [
 {
   rank : "queen",
   suit : "hearts",
   cardImage : "images/queen-of-hearts.png"
 },
 {
   rank : "queen",
   suit : "diamonds",
   cardImage : "images/queen-of-diamonds.png"
 },
 {
   rank : "king",
   suit : "hearts",
   cardImage : "images/king-of-hearts.png"
 },
 {
   rank : "king",
   suit : "diamonds",
   cardImage : "images/king-of-diamonds.png"
 }
 ];

let cardsInPlay = [];

function checkForMatch(){
   if (cardsInPlay[0] === cardsInPlay[1]) {
     alert("You found a match!");
 } else  {
     alert("Sorry, try again!");
 }
};


function flipCard() {
  let cardsId = this.getAttribute('data-id');
  cardsInPlay.push(cardsId).rank;
  console.log("User flipped " + cards[cardsId].rank + " of " + cards[cardsId].cardImage + " "+ cards[cardsId].suit);
    this.setAttribute('src', cards[cardsId].cardImage)
    if (cardsInPlay.length > 1) {
    checkForMatch();
    }
};

function createBoard (){
  for (let i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

 createBoard();
