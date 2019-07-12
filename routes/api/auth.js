const express = require('express');
const router = express.Router();
//
// route GET api/users, test route, public

router.get('/', (req, res) => res,send('Auth route'));

module.exports = router;
