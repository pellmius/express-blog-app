const express = require('express');
const router = express.Router();
const User = require('./usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var passport = require('passport');

const checkUserValidityWhenRegistering = (username,password,res) => {
    if(username.length >= 24) {
        res.json({msg:'Username too long'})
        return false;
    }
    else if(password.length < 8) {
        res.json({msg:'Password too short. Must have at least 8 characters'});
        return false;
    }
    return true;
}



router.get('/', async (req, res) =>{
    let users = await User.find({}).exec();
    res.send(users);
})

router.get('/:username', async (req, res) => {
    let user = await User.find({username:req.params.username}).exec();
    user.length > 0 ? res.json({user, success:true}) : res.json({msg:'User not found', success:false});
})

router.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
            if (err) return res.sendStatus(403)
            res.send(user)
        })
    }
);

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username}).exec();
        if(!user) res.json({msg:"No user found"})
        else if( user && !await bcrypt.compare(req.body.password, user.password)) res.json({msg:"Password mismatch"})
        else if(user && await bcrypt.compare(req.body.password, user.password)){
            console.log(user)
           const token = jwt.sign({username:user.username, pasword: user.password, followers:user.followers}, process.env.JWT_SECRET)
            console.log(jwt.verify(token, process.env.JWT_SECRET))
            res.json({token:token}) 
        }
        
    }
    catch {
        res.send("Error...")
    }
    
})


router.post('/create', (req, res) =>{
    User.findOne({username:req.body.username}, async (err,doc) => {
        if(err) throw err;
        if(doc) res.json({msg:"User already exists"});
        if(!doc && checkUserValidityWhenRegistering(req.body.username,req.body.password,res)) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            User.create({
                username: req.body.username,
                password: hashedPassword,
                date_joined: Date.now(),
                followers: 0,})
            res.json({msg:"User created successfully"});
        }
    })
    
})


module.exports = router;