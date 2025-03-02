const express = require('express');

// Router object
const router = express.Router(); // ✅ Use express.Router()

const { loginController, registerController } = require('../controllers/userController');

// Routes
// POST || LOGIN
router.post('/login', loginController);

// POST || REGISTER
router.post('/register', registerController);

module.exports = router;
