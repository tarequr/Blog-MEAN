const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'The email field is required.'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'The password field is required.']
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]    
},{timestamps: true});

// Export
module.exports = mongoose.model('User', userSchema);



