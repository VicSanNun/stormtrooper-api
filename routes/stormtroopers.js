const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Get all Stormtrooper");
});

router.get('/:_id', (req, res)=>{
    res.send("Get a specific Stromtrooper by id");
});

router.post('/', (req, res)=>{
    res.send("Create a new Stormtrooper");
});

router.put('/:_id', (req, res)=>{
    res.send("Update a Stormtrooper");
});

router.delete('/:_id', (req, res)=>{
    res.send("Delete a Stormtrooper");
});

module.exports = router;