const express = require('express');
const { getAllUserController, createUserController, singleUserController, updateUserController, deleteUserController, loginUserController } = require('../app/Controllers/UserController');

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
// #5 - Login One
router.post('/login', loginUserController);

module.exports = router