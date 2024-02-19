const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get('/q/:id', controller.getTopics);
// router.post('/', controller.postTopics);




module.exports = router;


