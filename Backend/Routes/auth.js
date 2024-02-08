const express=require('express');
const router=express.Router();
const User=require('../Model/users');
// API FOR LOGIN ROUTER
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === 'Admin' && password === 'admin@12345') {
            res.json({ success: true, message: 'Welcome Admin' });
            return; 
        }
        const user = await User.findOne({ username });
        // Check if the user exists and the password is correct
        if (user && user.password === password) {
            res.json({ success: true, userId: user._id, username: user.username, message: 'Welcome User' })

        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports=router;