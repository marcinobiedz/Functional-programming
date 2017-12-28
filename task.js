const Task = require("data.task");
Task.of(1)
    .map(x => x + 1)
    .chain(x => Task.of(x + 10))
    .fork(x => console.error(x), x => console.log(x));

const launch = () =>
    new Task((rej, res) => {
        res("Gooo");
    });

