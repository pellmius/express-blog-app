const express = require('express');
const router = express.Router();
const Post = require('./postsModel');

router.get('/', async (req,res) => {
    const posts = await Post.find({}).exec(); // finds all posts and assigns them to posts constant.
    res.json(posts); // Shows all posts in JSON format.
}) 

module.exports = router;