const Task = require("data.task");
const fs = require("fs");
const {List} = require("immutable-ext");
const futurize = require("futurize").futurize(Task);

const readFile = futurize(fs.readFile);

const files = List(["box.js", "config.json"]);

const res = files.traverse(Task.of, fn => readFile(fn, "utf-8"))
    .fork(console.error, console.log);

