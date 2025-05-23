const db = require('../db/db.js');

//get all users
const getAllUsers= async()=>{
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
}
//get user by id
const getUserById= async(id)=>{
    const [rows] = await 
            db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

//create user
const createUser= async(user)=>{
    const [rows] = await db.query('INSERT INTO users SET ?', [user]);
    return rows;
}

//update user
const updateUser= async(id, user)=>{
    const [rows] = await db.query('UPDATE users SET ? WHERE id = ?', [user, id]);
    return rows;
}
//delete user
const deleteUser= async(id)=>{
    const [rows] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return rows;
}

// export

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

