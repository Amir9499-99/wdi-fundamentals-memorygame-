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
  checkForMatch();
};

flipCard(0);
flipCard(2);
flipCard(0);
flipCard(1);
flipCard(0);
