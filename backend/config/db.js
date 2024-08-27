const mongoose = require('mongoose');
const colors = require('colors');

// function mongodb database connect
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to database ${mongoose.connection.host}`.bgCyan);
    } catch (error) {
        console.log("Error connecting", error);
    }
}

module.exports = connectDB;