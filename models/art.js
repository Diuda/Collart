var mongoose = require('mongoose');
var Schema = mongoose.Schema;


 var artSchema = new Schema({
 	title: {type: String, required:true},
 	username: {type: String, required:true},
 	link: {type: String},
 	like: {type: Number, default:0},
 	report: {type: Number},
 	description: {type: String ,required: true},
 	type: {type:String, required:true}

 	
 })

 var Art = mongoose.model('Art', artSchema);

 module.exports = Art;

module.exports.addArt = (newArt, callback)=>{

		newArt.save(callback);
}


module.exports.allArt = (callback)=>{
	Art.find({}, callback)
}

module.exports.updateLikes = (likes, callback)=>{
	Art.find({title: likes.title}, (err,art)=>{
		art[0].like = parseInt(likes.likes)
		var updateArt = new Art(art[0])
		console.log(art)

		updateArt.save(callback)
	})
}