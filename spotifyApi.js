// https://api.spotify.com/v1/search?q=${query}&type=artist
// https://api.spotify.com/v1/artists/${id}/related-artists

const Task = require("data.task");
const Either = require("data.either");
const request = require("request");

const httpGet = url =>
    new Task((rej, res) => request(url, (error, response, body) => error ? rej(error) : res(body)));

const eitherToTask = e => e.fold(Task.rejected, Task.of);

const getJSON = url =>
    httpGet(url)
        .map(parse)
        .chain(eitherToTask);

const parse = Either.try(JSON.parse);

const findArtist = name =>
    getJSON(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
        .map(result => result.artist.items)
        .map(first)
        .chain(eitherToTask);

const relatedArtist = id =>
    getJSON(`https://api.spotify.com/v1/artists/${id}/related-artists`)
        .map(result => result.artist);

const first = xs =>
    Either.fromNullable(xs[0]);

module.exports = {findArtist, relatedArtist};