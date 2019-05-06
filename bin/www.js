#!/usr/bin/env node

const app = require('../app');
const server = app.listen(3000, ()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Host:${host} | Port:${port}`);
});