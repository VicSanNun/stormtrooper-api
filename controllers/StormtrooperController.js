"use strict";

const debug = require('debug');

class StormtrooperController{
    constructor(StormtrooperModel){
        this.model = StormtrooperModel;
    }

    getAll(req, res, next){
        this.model.find({}, (err, data)=>{
            if(err) return(next(err));
            res.json(data);
        });
    }

    getById(req, res, next){
        const _id = req.params._id;
        this.model.findOne(_id, (err, data)=>{
            if(err) return(next(err));
            res.json(data);
        });
    }

    create(req, res, next){
        const body = req.body;
        this.model.create(body, (err, data)=>{
            if(err) return(next(err));
            res.json(data);
        });
    }

    update(req, res, next){
        const _id = req.params._id;
        const body = req.body;
        this.model.update(_id, (err, data)=>{
            if(err) return(next(err));
            res.json(data);
        });
    }

    remove(req, res, next){
        const _id = req.params._id;
        this.model.remove(_id, (err, data)=>{
            if(err) return(next(err));
            res.json(data);
        });
    }
}

module.exports = (StormtrooperModel) => new StormtrooperController(StormtrooperModel);