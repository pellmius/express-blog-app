require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 8000;
const User = require('./components/users/usersModel');
app.use(cors());
const JWTStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
const passport = require('passport');

passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
    User.findOne({id: jwt_payload.sub}, (err, user) => {
        if (err) {
            return done(err, false);
        }
        
        if (user) {
            return done(null,user)
        } else {
            return done(null, false)
        }
    })
}));


mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const usersComponent = require('./components/users/index');
const postsComponent = require('./components/posts/index');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/api/users', usersComponent.usersAPI);
app.use('/api/posts', postsComponent.postsAPI);









app.listen(PORT, async () =>{
    try {
        console.log(`Listening at port ${PORT}`);
    } catch {
        console.log("Could not listen");
    }
})