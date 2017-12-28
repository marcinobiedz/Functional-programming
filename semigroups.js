const {Map} = require("immutable-ext");

const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    inspect: () => `Sum(${x})`
});
Sum.empty = () => Sum(0);

const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    inspect: () => `All(${x})`
});
All.empty = () => All(true);

const First = x => ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
});

const acc1 = Map({name: First("Nico"), isPain: All(true), points: Sum(10), friends: ["Tom"]});
const acc2 = Map({name: First("Nico"), isPain: All(false), points: Sum(20), friends: ["Brad"]});

const res = acc1.concat(acc2);

module.exports = {Sum: Sum};