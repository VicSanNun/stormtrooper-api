'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('livro_nodejs:db');
const config = require('config');

function _connection(){
    const user = config.get('mongo.user');
    const pass = config.get('mongo.pass');
    const server = config.get('mongo.server');
    const port = config.get('mongo.port');
    const database = config.get('mongo.database');
    const auth = user ? user + ":" + pass + "@" : "";

    return "mongodb://"+auth+server+':'+port+'/'+database;
}

mongoose.connect(_connection(), { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err)=>{
    debug(err);
});
db.once('open', (callback)=>{
    debug('connected to mongodb');
});

module.exports = mongoose;  