'use strict';

const mongojs = require('mongojs');
const config = require('config');
const debug = require('debug')('livro_nodejs:db');

function _connection(){
    const user = config.get('mongo.user');
    const pass = config.get('mongo.pass');
    const server = config.get('mongo.server');
    const port = config.get('mongo.port');
    const database = config.get('mongo.database');
    const auth = user ? user + ":" + pass + "@" : "";

    return "mongodb://"+auth+server+':'+port+'/'+database;
}

const db = mongojs(_connection());

db.on('error', (err)=>{
    debug(err);
});

module.exports = db;