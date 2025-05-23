const express = require('express');


const getAllUsers = (req, res) => {
    res.send('Get all users');
}
const getUserById = (req, res) => {
    const id = req.params.id;
    res.send(`Get user by ID: ${id}`);
}
const createUser = (req, res) => {
    const user = req.body;
    res.send(`Create user: ${JSON.stringify(user)}`);
}
const updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    res.send(`Update user with ID ${id}: ${JSON.stringify(user)}`);
}
const deleteUser = (req, res) => {
    const id = req.params.id;
    res.send(`Delete user with ID: ${id}`);
}
// Export the functions
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}