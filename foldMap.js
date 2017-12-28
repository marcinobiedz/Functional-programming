const {List, Map} = require("immutable-ext");
const {Sum} = require("./semigroups");

const res = Map({brian: 3, sara: 5})
    .map(Sum)
    .fold(Sum.empty());
console.log(res);