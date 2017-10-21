'use strict'
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.info = (req, res)=>{
	res.json({user: req.user});
}


module.exports = router;