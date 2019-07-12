const express = require('express');
const router = express.Router();
//
// route GET api/posts, test route, public

router.get('/', (req, res) => res,send('Posts route'));

module.exports = router;
