require('dotenv'). config();
const express = require('express');
const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
    });
};

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h' // Token expires in 1 hour
    });
}

const login = async (req, res) => {
    const { email, id } = req.body;
    try {
        const user = await usermodel.getUserByEmailID(email,id);
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};

module.exports = {
    login,
    verifyToken
};