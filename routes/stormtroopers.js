const express = require('express');
const router = express.Router();

const mongo = require('../db/mongo');
const StormtrooperModel = require('../models/StormtrooperModel')(mongo);
const StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

router.get('/', StormtrooperController.getAll.bind(StormtrooperController));

router.get('/:_id', StormtrooperController.getById.bind(StormtrooperController));

router.post('/', StormtrooperController.create.bind(StormtrooperController));

router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));

router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;