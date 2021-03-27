const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dayjs = require('dayjs');
const postSchema = new Schema ({ 
    title: String,
    content: String,
    author: String,
    date_posted: {type: Date, default: dayjs()},
    upvotes: Number,
    downvotes: Number,
    comments: [{type: String}],
    tags: [{type: String}]

})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;