const express = require('express');
const router = express.Router();
const passport = require('passport');

const mongoose = require('../db/mongoose');
const StormtrooperModel = require('../models/StormtrooperModel')(mongoose);
const StormtrooperController = require('../controllers/StormtrooperController')(StormtrooperModel);

router.get('/', passport.authenticate('basic', {session:false}) ,StormtrooperController.getAll.bind(StormtrooperController));

router.get('/:_id', passport.authenticate('basic', {session:false}), StormtrooperController.getById.bind(StormtrooperController));

router.post('/', StormtrooperController.create.bind(StormtrooperController));

router.put('/:_id', StormtrooperController.update.bind(StormtrooperController));

router.delete('/:_id', StormtrooperController.remove.bind(StormtrooperController));

module.exports = router;