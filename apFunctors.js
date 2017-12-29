const {Box} = require("./box");
const {List} = require("immutable-ext");

const liftA2 = (f, fx, fy) =>
    fx.map(f).ap(fy);

const add = x => y => x + y;

//const res = liftA2(add, Box(2), Box(4));

const merch = () => List.of(x => y => `${x}-${y}`)
    .ap(List(["t-shirt", "pants"]))
    .ap(List(["large", "mid", "small"]));

console.log(merch());





