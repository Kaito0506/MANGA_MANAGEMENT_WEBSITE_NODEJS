const express = require('express');
const cors = require('cors');
const servicesRouter = require('./routes/services.router');
const usersRouter = require('./routes/user.router');
const session = require('express-session');
const app = express();

const {
    resourceNotFound,
    handleError
} = require('./controllers/errors.controller');

const { SESSION_SECRET } = process.env;



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our page.' });
});

// apply sesstion to app
app.use(session({secret: SESSION_SECRET, resave: true, saveUninitialized: true}));

// apply service router
app.use('/api/services', servicesRouter);

// apply user router
app.use('/api/user', usersRouter);


// Handle 404 response 
app.use(resourceNotFound);
// Define error-handling middleware last 
app.use(handleError);

module.exports = app;