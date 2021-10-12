const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })  ;

  it('should store a user guess', function() {
    const turn = new Turn('lab');
    expect(turn.userGuess).to.equal('lab');
  });

  it('should be able to return the users guess', function() {
    const turn = new Turn('lab');
    expect(turn.returnGuess()).to.equal('lab');
  })

  it('should be able to return the card object', function() {
    const card = new Card (
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    )
    const turn = new Turn('lab', card);
    console.log(turn)
    expect(turn.returnCard()).to.equal(card);
  })
  
})