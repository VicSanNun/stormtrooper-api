"use strict";

const debug = require('debug');
const Promise = require('bluebird');

class StormtrooperController{
    constructor(StormtrooperModel){
        this.model = Promise.promisifyAll(StormtrooperModel);
    }

    handleNotFound(data){
        if(!data){
            const err = new Error('Not Found');
            err.status = 404;
            throw err;
        }
        return data;
    }

    getAll(req, res, next){
        this.model.findAsync({})
            .then((data)=>{
                res.json(data);
            })
            .catch(next);
    }

    getById(req, res, next){
        const _id = req.params._id;
        this.model.findOneAsync(_id)
            .then(this.handleNotFound)
            .then(data=>{
                res.json(data)
            })
            .catch(next);
    }

    create(req, res, next){
        const body = req.body;
        this.model.createAsync(body)
            .then((err, data)=>{
                res.json(data);
            })
            .catch(next);
    }

    update(req, res, next){
        const _id = req.params._id;
        const body = req.body;
        this.model.updateAsync(_id, body)
            .then((err, data)=>{
                res.json(data);
            })
            .catch(next);
    }

    remove(req, res, next){
        const _id = req.params._id;
        this.model.removeAsync(_id)
            .then((err, data)=>{
                res.json(data);
            })
            .catch(next);
    }
}

module.exports = (StormtrooperModel) => new StormtrooperController(StormtrooperModel);