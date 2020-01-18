
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
 } else {
     alert("Sorry, try again!");
 }
};


function flipCard(cardsId) {
  cardsInPlay.push(cards[cardsId].rank);
  cardsInPlay.push(cards[cardsId].cardImage);
  cardsInPlay.push(cards[cardsId].suit);
  console.log("User flipped " + cards[cardsId].rank + " of " + cards[cardsId].cardImage + " "+ cards[cardsId].suit);
    if (cardsInPlay.length > 3) {
    checkForMatch();
    }
};

flipCard(0);
flipCard(1);
