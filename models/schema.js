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


 // var profileSchema = new Schema({
 // 	name: {type: String, required:true},
 // 	username: {type: String, required:true, unique:true},
 // 	type: {type: String, required:true},
 // 	experience: {type: String, required:true},
 // 	profession: {type: String, required: true},
 // 	city: {type: String},
 	
 // })

var User = mongoose.model('User', userSchema);
// var Profile = mongoose.model('Profile', profileSchema);

// module.exports = {
// 	User: User,
// 	Profile: Profile
// };

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
