const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    // game.start()
    // console.log(game)
    expect(Game).to.be.a('function');
  });

});