const take = (n, iterator, delayed=[]) => (
    n === 0
        ? delayed
        : take(n-1, iterator, [...delayed, iterator()]));
    
const identity = (v) => () => v;

const repeat = (n, val) => take(n, identity(val));

const foldArrayWith = (fn, terminalValue, [first, ...rest]) => (
    first === undefined 
        ? terminalValue
        : fn(first, foldArrayWith(fn, terminalValue, rest)));

const callLeft = (fn, ...args) => (...restArguments) => fn(...args, ...restArguments); 

const callRight = (fn, ...args) => (...restArguments) => fn(...restArguments, ...args); 

const foldArray = (arr)=> callRight(foldArrayWith, arr);

module.exports = {
    take : take,
    repeat: repeat,
    foldArrayWith: foldArrayWith,
    foldArray: foldArray,
    callLeft: callLeft
};