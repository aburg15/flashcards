const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards;
  }

  start() {
    this.cards = prototypeQuestions.map((data) => {
      const newCard = new Card(data.id, data.question, data.answers, data.correctAnswer)
      return newCard
    })

    let deck = new Deck(this.cards);
    let round = new Round(deck);

    this.printMessage(deck);
    this.printQuestion(round);
  
  }

  currentRound() {

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;