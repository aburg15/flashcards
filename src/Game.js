const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards;
    this.currentRound = 0;
  }

  start() {
    this.cards = prototypeQuestions.map((data) => {
      const newCard = new Card(data.id, data.question, data.answers, data.correctAnswer)
      return newCard
    })
    let deck = new Deck(this.cards);
    this.currentRound = new Round(deck);
   
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}


module.exports = Game;