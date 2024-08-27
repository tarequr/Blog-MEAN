const mongoose = require('mongoose');

//Schema
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'The title field is required.']
    },
    description:{
        type: String,
        required: [true, 'The description field is required.']
    },
    content:{
        type: String,
        required: [true, 'The price field is required.']
    },
    author:{
        type: String,
        required: [true, 'The price field is required.']
    },
},{timestamps: true});

// Export
module.exports = mongoose.model('Post', postSchema);