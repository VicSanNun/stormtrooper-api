export default class StormtrooperController{
    public getAll = (req, res, next)=>{
        res.send("Get all Stromtrooper");
    }

    public getById = (req, res, next)=>{
        res.send("Get a specific stormtrooper by id");
    }

    public create = (req, res, next)=>{
        res.send("Createa new stormtrooper");
    }

    public update = (req, res, next)=>{
        res.send("Update a Stormtrooper");
    }

    public remove = (req, res, next)=>{
        res.send("Remove a Stormtrooper");
    }
}