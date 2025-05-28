const express = require('express');
const router = express.Router();
const { getAllUsers
        ,getUserById
        ,createUser
        ,updateUser
        ,deleteUser } 
        = require('../controllers/user.controller');

const {verifyToken} = require('../controllers/auth.controller');

// GET all users
router.get('/',verifyToken,getAllUsers);
// GET user by ID
router.get('/:id',getUserById);
// POST create user
router.post('/',createUser);
// PUT update user
router.put('/:id',updateUser);
// DELETE user
router.delete('/:id',deleteUser);
// Export the router
module.exports = router;