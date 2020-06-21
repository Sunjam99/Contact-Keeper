const express = require('express');
const router = express.Router();

const user = require('./modals/user');

//@route  POST api/users
//@desc   register a user
//@access Public
router.post('/',(req, res)=> {
    res.send(req.body);
});

module.exports = router;
