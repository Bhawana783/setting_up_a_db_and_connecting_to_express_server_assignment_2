const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        if (!name || !email || !password || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ name, email, password, age });
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
