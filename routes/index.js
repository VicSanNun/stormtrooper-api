const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(201);
    res.send('Hello World !');
});

module.exports = router;