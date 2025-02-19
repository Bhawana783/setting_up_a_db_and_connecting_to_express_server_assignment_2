const mongoose = require('mongoose');
const userSchema = require('./schema'); // Import schema

const User = mongoose.model('User', userSchema); // Create model

module.exports = User;
