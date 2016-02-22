// Libraries

// Variables

// Functions

// Chooses card using probability. Returns card type index.
function chooseCard(deck) {
  var randomNumber = getRandomNumber(0, deck.cardsLeft),
      cards = deck.cards;
  for (var cardType = 0,
           cardTypes = deck.cardTypesLeft,
           intervalRightBorder = 0;
       cardType < cardTypes;
       cardType++)
  {
    intervalRightBorder += cards[cardType].quantity;
    if (randomNumber < intervalRightBorder) {
      return cardType;
    }
  }
}
// Generates cards
function generateCards() {
  return {
      0: generateCardType('two', 2),
      1: generateCardType('three', 3),
      2: generateCardType('four', 4),
      3: generateCardType('five', 5),
      4: generateCardType('six', 6),
      5: generateCardType('seven', 7),
      6: generateCardType('eight', 8),
      7: generateCardType('nine', 9),
      8: generateCardType('ten', 10),
      9: generateCardType('jack', 10),
      10: generateCardType('queen', 10),
      11: generateCardType('king', 10),
      12: generateCardType('ace', 11)
    };
}
// Generates card type
function generateCardType(cardName, cardValue) {
  return {
    name: cardName,
    quantity: 4,
    value: cardValue,
    suits: generateSuits()
  };
}
// Generates deck
function generateDeck() {
  return {
    cards: generateCards(),
    cardTypesLeft:13,
    cardsLeft:52
  };
}
// Generates suits
function generateSuits() {
  return {
    0:{color:'red', name: 'hearts'},
    1:{color:'red', name: 'diamonds'},
    2:{color:'black', name: 'spades'},
    3:{color:'black', name: 'clubs'},
    suitsLeft:4
  };
}
// Gets card
function getCard(deck) {
  var cardType = chooseCard(deck);
  logCard(deck, cardType);
  removeCard(cardType, deck);
}
// Gets random number from interval
function getRandomNumber(min, max) {
  return (Math.random() * (max - min)) + min;
}
// Logs card
function logCard(deck, cardType) {
  console.log(deck.cards[cardType].name);;
}
// Removes card from the deck
function removeCard(cardType, deck) {
  deck.cards[cardType].quantity -= 1;
  deck.cardsLeft -= 1;
  if (deck.cards[cardType].quantity < 1) { // If no cards of this type left
    removeCardType(cardType, deck);
  }
}
// Removes card type from the deck
function removeCardType(cardType, deck) {
  if (deck.cardTypesLeft > 1) {
    deck.cards[cardType] = deck.cards[deck.cardTypesLeft - 1];
    delete deck.cards[deck.cardTypesLeft - 1];
    deck.cardTypesLeft -= 1;
  } else {
    delete deck.cards[cardType];
  }
}

//Code
var deck = generateDeck();
for (var i = 0; i < 52; i++) {
  console.log((i+1));
  getCard(deck);
}
