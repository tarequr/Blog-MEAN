const express = require('express');
const { getAllPostController, createPostController, singlePostController } = require('../app/Controllers/PostController');

let router = express.Router();

// #1 - Featch All
router.get('/', getAllPostController);
// #2 - Featch One
router.get('/:id', singlePostController);
// #3 - Create One
router. post('/create', createPostController);
// #4 - Update One
// #5 - Delete One


module.exports = router