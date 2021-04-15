const express = require('express');
const router = express.Router();
const authorize = require('../helpers/authorize');
const Role = require('../helpers/role');
const authRoute = require('./auth.routes');

router.use('/auth', authRoute);

module.exports = router;
