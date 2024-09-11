const express = require('express');
const authMiddleware = require('../app/Middleware/authMiddleware');
const { getAllPostController, createPostController, singlePostController, updatePostController, deletePostController } = require('../app/Controllers/PostController');

let router = express.Router();

// #1 - Featch All
router.get('/', authMiddleware, getAllPostController);
// #2 - Featch One
router.get('/:id', authMiddleware, singlePostController);
// #3 - Create One
router.post('/create', authMiddleware, createPostController);
// #4 - Update One
router.put('/update/:id', authMiddleware, updatePostController);
// #5 - Delete One
router.delete('/delete/:id', authMiddleware, deletePostController);


module.exports = router