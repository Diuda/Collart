var mongoose = require('mongoose');
var Schema = mongoose.Schema;


 var profileSchema = new Schema({
 	name: {type: String, required:true},
 	username: {type: String, required:true, unique:true},
 	type: {type: String, required:true},
 	experience: {type: String, required:true},
 	profession: {type: String, required: true},
 	city: {type: String},
 	
 })

 var Profile = mongoose.model('Profile', profileSchema);

 module.exports = Profile;