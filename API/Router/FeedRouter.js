const express = require('express');
const router = express.Router();
const controller = require('../controller/FeedController.js');

router.get('/getschools',controller.getSchools);
router.get('/getColleges',controller.getColleges);
router.post('/post',controller.CreatePost);
router.post('/Login',controller.Auth);
router.post('/Savetxt',controller.save);
module.exports = router;