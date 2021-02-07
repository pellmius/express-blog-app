const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({ 
    title: String,
    content: String,
    author: String,
    date_posted: Date,
    upvotes: Number,
    downvotes: Number,
    comments: [{type: String}],
    tags: [{type: String}]

})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;