const Task = require("data.task");

const Db = ({
    find: id =>
        new Task((rej, res) =>
            setTimeout(() =>
                res({id, title: `Proj ${id}`}), 3000))
});

const reportHeader = (p1, p2) => `Report: ${p1.title}, ${p2.title}`;

Task.of(p1 => p2 => reportHeader(p1, p2))
    .ap(Db.find(10))
    .ap(Db.find(6))
    .fork(console.error, console.log);

Db.find(20).chain(p1 => Db.find(8).map(p2 => reportHeader(p1, p2))).fork(console.error, console.log);