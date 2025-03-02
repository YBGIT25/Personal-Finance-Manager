const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config(); // Ensure environment variables are loaded

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`.bgRed);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
