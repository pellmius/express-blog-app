const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    date_joined: Date,
    followers: Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;