const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const session = require('express-session');

const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session management configuration
app.use(session({
    secret: 'secret_key', // Use strong secret key for session encryption
    resave: false, // Do not resave session if unmodified
    saveUninitialized: true, // Save new sessions even if they're not initialized
    cookie: { maxAge: 15 * 60 * 1000 } // Session expires after 15 minutes
}));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle sign-up 
app.post('/auth/signup', (req, res) => {
    const { username, password } = req.body;
    // Put database logic to save username and pass here
    console.log(`User signed up: ${username}`);
    res.send('Sign up successful!');
});

// Handle sign-in 
app.post('/auth/signup', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ id: users.length + 1, username, password: hashedPassword });
    res.send('User registered');
});

// Use authentication routes
app.use('/auth', authRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});