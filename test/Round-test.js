const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card (
      1, 
      'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 
      'sea otters'
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
        
    it('the current card should be the first card', function() {
      expect(round.returnCurrentCard()).to.equal(card1);
    });
  })