const express = require('express');
const router = express.Router();

const StormtrooperController = require('../controllers/StormtrooperController.js');

router.get('/', StormtrooperController.getAll);

router.get('/:_id', StormtrooperController.getById);

router.post('/', StormtrooperController.create);

router.put('/:_id', StormtrooperController.update);

router.delete('/:_id', StormtrooperController.remove);

module.exports = router;