const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1; 
  let card2;
  let card3; 
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card (
      1, 
      'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 
      'sea otter'
      );
      
    card2 = new Card (
      14,
      'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 
      'gallbladder'
      );
        
    card3 = new Card (
      12, 
      'What is Travis\'s middle name?', 
      ['Lex', 'William', 'Fitzgerald'], 
      'Fitzgerald'
      );

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);          
    });

    it('should be a function', function() {
      expect(Round).to.be.a('function');
    });
        
    it('the current card should agree to the current turn', function() {
      round.takeTurn('pug', card1);

      expect(round.returnCurrentCard()).to.equal(card2);
    });

    it('should provide user with feedback for correct answers', function() {
      expect(round.takeTurn('gallbladder', card2)).to.equal('correct!');
    })

    it('should provide user with feedback for incorrect answers', function() {
      expect(round.takeTurn('William', card3)).to.equal('incorrect!');
    })

    it('should track the amount of inccorect guesses', function() {
      round.takeTurn('pug', card1);
      round.takeTurn('gallbladder', card2);
      round.takeTurn('Lex', card3);
      expect(round.incorrectGuesses.length).to.equal(2);
    })

    it('should tell you what percent of questions were answered correctly', function() {
      round.takeTurn('pug', card1);
      round.takeTurn('gallbladder', card2);
      round.takeTurn('Lex', card3);
      expect(round.calculatePercentCorrect()).to.equal(33);
    })

    it('should be ablet to track the number of turns', function() {
      round.takeTurn('pug', card1);
      round.takeTurn('gallbladder', card2);
      expect(round.turns).to.equal(2);
    })

    
    it('should tell the user what % of the questions were answered correctly', function() {
      round.takeTurn('pug', card1);
      round.takeTurn('gallbladder', card2);
      round.takeTurn('Lex', card3);
      
      expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
    })
    
  })