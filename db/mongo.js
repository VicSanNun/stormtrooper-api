'use strict';

const mongojs = require('mongojs');
const debug = require('debug')('livro_nodejs:db');

function _connection(){
    const user = "";
    const pass = "";
    const server = "localhost";
    const port = "21017";
    const database = "livro_nodejs";
    const auth = user ? user + ":" + pass + "@" : "";

    return "mongodb://"+auth+server+':'+port+'/'+database;
}

const db = mongojs(_connection());

db.on('error', (err)=>{
    debug(err);
});

module.exports = db;