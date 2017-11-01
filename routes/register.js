'use strict'
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../models/register');



router.register = (req,res)=>{
	var newUser = new schema({
		"name": req.body.name,
		"username": req.body.username,
		"email": req.body.email,
		"password": req.body.password,
		"contact": req.body.contact
	});

	schema.registerUser(newUser, (err, user)=>{
		console.log(user);
		if(err)
			res.json({success: false, status:120, msg:'cannot regitser user'})
		else
			res.json({success: true, status:200, msg:'user registered'})
	})

	


}


module.exports = router;

