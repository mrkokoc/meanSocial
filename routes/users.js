const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    return res.send('REGISTER');
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    return res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    return res.send('PROFILE');
});

// Validate
router.get('/validate', (req, res, next) => {
    return res.send('VALIDATE');
});

module.exports = router;