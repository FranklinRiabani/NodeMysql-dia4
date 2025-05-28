require('dotenv').config();
const express = require('express');
const db = require('./db/db');
const app = express();
app.use(express.json());
const PORT_API = process.env.PORT_API || 3000;
app.get('/', (req, res) => {
    res.send('Hola Mysql!');
}
);

// Import routes
const userRoute = require('./routers/user.route');
app.use('/api/users', userRoute);

const authRoute = require('./routers/auth.route');
app.use('/api/auth', authRoute);


// Test database connection
db.getConnection()
    .then(connection => {
        console.log('Database connected successfully');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });

app.listen(PORT_API, () => {
    console.log(`Server is running on port ${PORT_API}`);
    });

