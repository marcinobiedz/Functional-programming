const Box = x => ({
    inspect: () => `Box(${x})`,
    map: f => Box(f(x)),
    chain: f => f(x),
    fold: f => f(x),
    ap: b2 => b2.map(x)
});

const LazyBox = g => ({
    map: f => LazyBox(() => f(g())),
    chain: f => f(g()),
    fold: f => f(g())
});

module.exports = {Box, LazyBox};