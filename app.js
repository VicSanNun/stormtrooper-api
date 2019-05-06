'use strict';

//Módulos
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next)=>{
    if(req.urel === '/favicon.ico'){
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end('');
    }
    else{
        next();
    }
});

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.get('/', (req, res)=>{
    res.status(201);
    res.send("Hello World !");
});

//Tratamento de Erros
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(err.status || 500).json({err: err.message});
});

//Listener
const server = app.listen(3000, ()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Host: ${host} e Port: ${port}`);
});