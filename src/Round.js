const Turn = require('../src/Turn');

class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck.cards;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(userGuess, card) {
    const newTurn = new Turn(userGuess, card)
    this.turns += 1;
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;