const express = require('express');
const router = express.Router();
const { login, verifyToken } = require('../controllers/auth.controller');

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzQ4MzkxNzQ2LCJleHAiOjE3NDgzOTUzNDZ9.-rhPP2svHEGDRooLDi9xoqsGFC4W5u27H4SAoxJhrXE
*/

// POST login
router.post('/login', login);

module.exports = router;
