const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    console.log(turn)
    expect(Turn).to.be.a('function');
  })

  
})