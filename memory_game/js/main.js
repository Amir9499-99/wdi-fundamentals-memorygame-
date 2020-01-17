const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
   if (cardsInPlay[0] === cardsInPlay[1]) {
     console.log("You found a match!");
 } else {
     console.log("Sorry, try again!");
 }
};


function flipCard(cardsId) {
  cardsInPlay.push(cards[cardsId]);
  console.log("User flipped " + cards[cardsId]);
  if (cardsInPlay.length > 1) {
    checkForMatch();
  }
};

flipCard(0);
