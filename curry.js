const add = x => (y => x + y);

const modulo = dvr => (dvd => dvd & dvr);

const filter = pred => xs => xs.filter(pred);

const replace = regex => repl => str => str.replace(regex, repl);



