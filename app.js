const makeDeck = () => {
   return {
      deck: [],
      drawnCards: [],
      suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
      initializeDeck() {
         const {
            suits,
            values,
            deck
            } = this; // now all references mean this.suits, this.values, this.deck, etc
            for(let value of values.split(',')) {
               for(let suit of suits) {
                     deck.push({
                        value,
                        suit
                  })
               }
            }
      },
      drawCard() {
         const card = this.deck.pop();
         this.drawnCards.push(card);
         return card;
   }, 
      drawMultiple(numCards) {
         const cards = [];
         for(let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
         }
         return cards;
      },
      // fisher yates shuffle
      shuffle() {
         const {deck} = this;
         for (let i = deck.length - 1; i > 0; i-- ) {
            let j = Math.floor(Math.random() * (i + 1));
            // swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
         }
      }
   }
}
const myDeck = makeDeck();
myDeck.initializeDeck(); // initializing the deck
myDeck.shuffle(); // shuffles deck
const h1 = myDeck.drawMultiple(2); // hand one
const h2 = myDeck.drawMultiple(2); // hand two
const h3 = myDeck.drawMultiple(5); // hand three

const deck2 = makeDeck();
deck2.initializeDeck();

