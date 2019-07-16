const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
// private 
// route GET api/profile/me, test route, public
// get current users profile

router.get('/me', (req, res) => {
try {
const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
if(!profile) {
    return res.status(400).json({ msg: 'There is no profile for this user' });
}

}   catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
} 
};

module.exports = router;
