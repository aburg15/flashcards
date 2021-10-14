const Card = require("./Card");

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    // console.log(`a`, this.userGuess)
    // console.log(`b`, this.card.correctAnswer)
    if (this.card.correctAnswer === this.userGuess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}


module.exports = Turn;