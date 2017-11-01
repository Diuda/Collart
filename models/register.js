var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var Schema = mongoose.Schema;

 var userSchema = new Schema({
 	name: {type: String, required:true},
 	username: {type: String, required:true, unique:true},
 	email: {type: String, required:true, unique:true},
 	password: {type: String, required:true},
 	contact: {type: String, required:true}
 })



var User = mongoose.model('User', userSchema);


module.exports = User;

module.exports.registerUser = (newUser, callback)=>{
	// console.log(newUser);
	bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
    	if(err) throw err;
        newUser.password = hash;
        // console.log(newUser.password)
        newUser.save(callback)
    });
});
}

module.exports.findUserByUserName = (username, callback)=>{
	// if(err) throw err;
	User.findOne({username: username}, callback);
}

module.exports.comparePassword = (curPass, actPass, callback)=>{
	bcrypt.compare(curPass, actPass, (err, res)=>{
    	if(err) throw err;
    		callback(null, res);
	});
}


 module.exports.getAllProfile = (callback)=>{
    User.find({}, callback)
 }