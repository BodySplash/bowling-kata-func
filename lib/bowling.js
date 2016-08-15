'use strict';

const lo = require('./lo.js');

module.exports = function bowlingScore(throws) {
    
    const sum = lo.callLeft(lo.foldArrayWith, (a, b) => a+b, 0);
    
    const framer = (remaining=throws) => () => {
        const [first, second, ...rest] = remaining;
        if(first === 10) {
            remaining = [second, ...rest];
            return [first, second, rest[0]];
        }
        if(first+second === 10) {
            remaining = rest;
            return [first, second, rest[0]];
        }
        remaining = rest;
        return [first, second];
    };
    
    const scoreFrame = (nextFrame = framer()) => () => (sum(nextFrame()));
    
    return sum(lo.take(10, scoreFrame()));
};
