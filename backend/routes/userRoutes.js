const express = require('express');
const { getAllUserController, createUserController, singleUserController, updateUserController, deleteUserController } = require('../app/Controllers/UserController');

let router = express.Router();

// #1 - Featch All
router.get('/', getAllUserController);
// #2 - Featch One
router.get('/:id', singleUserController);
// #3 - Create One
router.post('/create', createUserController);
// #4 - Update One
router.put('/update/:id', updateUserController);
// #5 - Delete One
router.delete('/delete/:id', deleteUserController);


module.exports = router