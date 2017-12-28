const Box = x => ({
    inspect: () => `Box(${x})`,
    map: f => Box(f(x)),
    fold: f => f(x)
});



