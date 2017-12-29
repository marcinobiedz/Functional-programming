const Task = require("data.task");
const fs = require("fs");
const {Map, List} = require("immutable-ext");

const httpGet = (path, params) => Task.of(`${path}: result`);

Map({home: ["/", "/home"], about: ["/about"]})
    .traverse(Task.of, routes =>
        List(routes)
            .traverse(Task.of, route => httpGet(route, {})))
    .fork(console.error, console.log);