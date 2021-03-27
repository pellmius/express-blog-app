const express = require('express');
const router = express.Router();
const Post = require('./postsModel');
const dayjs = require('dayjs');

router.get('/', async (req,res) => {
    const posts = await Post.find({}).exec(); // finds all posts and assigns them to posts constant.
    res.json(posts); // Shows posts in JSON format.
}) 


router.get ('/find/:post_id', async (req,res) => {
    try {
        const post = await Post.findOne({_id: req.params.post_id}).exec(); // finds post with id specified in URL.
        res.send(post) 
    } catch {
        res.json({msg: "Invalid post ID."})
    }
    
})

router.get('/pinned', async (req,res) => {
    try {
        const posts = await Post.find({pinned:true}).exec(); // finds all posts with front_page set to true.
        console.log(posts);
        res.json(posts); // Shows posts in JSON format.
    }
    catch {
        res.json({msg:"No pined posts."})
    }
})



router.get('/recent', async (req,res) => {
    const posts = await Post.find( {date_posted: {$gt: dayjs().subtract(7,'day')} }).sort('-date_posted').exec(); // finds all posts between 7 days ago and now.
    res.json(posts); // Shows posts in JSON format
})

module.exports = router;