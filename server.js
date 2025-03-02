require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB'); 

const app = express(); // ✅ Initialize app first

// Middleware
app.use(express.json()); // ✅ Middleware to handle JSON data

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/users', require('./routes/userRoute')); 

// Test Route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to Personal Finance Manager API!');
});

const PORT = process.env.PORT || 8080; // ✅ Set port to 8080

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
