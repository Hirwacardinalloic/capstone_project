var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    articleTitle: {
        type: String,
        required: true
    },
    imageURL: String,
    date: {
        type: Date,
        default: Date.now
    },
    content: String
});

module.exports = mongoose.model('articles', articleSchema);