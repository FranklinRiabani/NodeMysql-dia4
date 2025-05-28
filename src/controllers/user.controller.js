const express = require('express');

const usermodel = require('../models/user.model');



const getAllUsers = async(req ,res) => {
    try {
        const users = await usermodel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}
const getUserById = async(req, res) => {
    const id = req.params.id;
    try{
        const user = await usermodel.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}
const createUser = (req, verifyToken, res) => {
    const user = req.body;
    try {
        const newUser = usermodel.createUser(user);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }

}
const updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    try {
        const updatedUser = usermodel.updateUser(id, user);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }   
}
const deleteUser = (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = usermodel.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }       
}
// Export the functions
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}