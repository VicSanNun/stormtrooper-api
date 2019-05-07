"use strict";

class StormtrooperController {
    getAll(req, res, next){
        res.send("Get All Stormtrooper");
    }

    getById(req, res, next){
        res.send("Get a specific stormtrooper by id");
    }

    create(req, res, next){
        res.send("Create a Stormtrooper");
    }

    update(req, res, next){
        res.send("Update a Stormtrooper");
    }

    remove(req, res, next){
        res.send("Remove a Stormtrooper");
    }
}

module.exports = new StormtrooperController();