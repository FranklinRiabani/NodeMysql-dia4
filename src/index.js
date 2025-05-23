require('dotenv').config();
const express = require('express');
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




app.listen(PORT_API, () => {
    console.log(`Server is running on port ${PORT_API}`);
    });

