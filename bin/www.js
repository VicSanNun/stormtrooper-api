#!/usr/bin/env node

const app = require('../app');
const port = process.env.PORT || 8080;
const server = app.listen(port, ()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Host:${host} | Port:${port}`);
});