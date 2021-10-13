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
    const turn = new Turn('pug');
    expect(turn.userGuess).to.equal('pug');
  });

  it('should be able to return the users guess', function() {
    const turn = new Turn('pug');
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should be able to return the card object', function() {
    const card = new Card (
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    )
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  })
  
  it('should be able to evaluate the users guess for accuracy', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    )
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should provide user with feedback', function() {
    const card = new Card (
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    )
    const turn = new Turn('pug', card);
  
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

})