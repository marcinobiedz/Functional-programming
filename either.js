const Right = x => ({
    map: f => Right(f(x)),
    chain: f => f(x),
    inspect: () => `Right(${x})`,
    fold: (f, g) => g(x)
});

const Left = x => ({
    map: f => Left(x),
    chain: f => Left(x),
    inspect: () => `Left(${x})`,
    fold: (f, g) => f(x)
});
