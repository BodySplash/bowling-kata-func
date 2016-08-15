'use strict';

require('chai').should();

const bowlingScore = require('./bowling.js');
const repeat = require('./lo.js').repeat;

describe('Bowling', function () {

    it('gives score for gutter game', () => {
        const throws = repeat(20, 0);
        
        const score = bowlingScore(throws);
        
        score.should.equal(0);
    });
    
    it('gives score for simple gane', () => {
        const throws = repeat(20, 1);
        
        const score = bowlingScore(throws);
        
        score.should.equal(20);  
    });
    
    it('computes spare', () => {
        const throws = [3, 7, 4, ...repeat(17, 0)];
        
        const score = bowlingScore(throws);
        
        score.should.equal(18); 
    });
    
    it('computes strike', ()=>{
        const throws = [10, 2, 3, ...repeat(16, 0)];
        
        const score = bowlingScore(throws);
        
        score.should.equal(20); 
    });
    
    it('computes perfect score', () => {
        const throws = repeat(12, 10); 
        
        const score = bowlingScore(throws);
        
        score.should.equal(300);
    });
   
});
