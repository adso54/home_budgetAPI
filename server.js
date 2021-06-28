const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


// Importing routers
const userRoutes = require('./routes/user');

// App config
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes Config:
app.use('/user', userRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Our app is runnig on port ${PORT}`);
})