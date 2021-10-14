const Turn = require('../src/Turn');

class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck.cards;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
    this.card;
  }

  returnCurrentCard() {
    this.card = this.deck[this.turns];
    return this.card;
  }

  takeTurn(userGuess) {
    const newTurn = new Turn(userGuess, this.card) 
    
    this.turns += 1;
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    this.returnCurrentCard();
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endRound() {
    // console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;