'use strict';

const lo = require('./lo.js');

module.exports = function bowlingScore(throws) {
    
    const sum = lo.callLeft(lo.foldArrayWith, (a, b) => a+b, 0);
    
    const framer = (all=throws) => () => {
        const [first, second, ...rest] = all;
        if(first === 10) {
            all = [second, ...rest];
            return [first, second, rest[0]];
        }
        if(first+second === 10) {
            all = rest;
            return [first, second, rest[0]];
        }
        all = rest;
        return [first, second];
    };
    
    const scoreFrame = (nextFrame = framer()) => () => (sum(nextFrame()));
    
    return sum(lo.take(10, scoreFrame()));
};
