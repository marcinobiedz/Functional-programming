const {List} = require("immutable-ext");
const {Right, Left} = require("./either");
const {Box} = require("./box");
const Task = require("data.task");

const res = List(["hello", "world"]).chain(x => List(x.split('')));

const fake = id => ({
    id,
    name: "user1",
    best_friend: id + 1
});

const Db = ({
    find: id =>
        new Task((rej, res) => res(id < 2 ? Right(fake(id)) : Left("not-found")))
});

const eitherToTask = e => e.fold(Task.rejected, Task.of);

Db.find(3)
    .chain(eitherToTask)
    .chain(user => Db.find(user.best_friend))
    .chain(eitherToTask)
    .fork(console.error, console.log);

