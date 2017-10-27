var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var cors = require('cors')

var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
var profile = require('./routes/profile');
var config = require('./config/database');
var User = require('./models/register');

var app = express();

app.use(cors())

// mongoose.createConnection(config.database, {
// 	useMongoClient: true,
// });

mongoose.connect(config.database)

mongoose.connection.on('connected',()=>{
	console.log("connected to database")
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/', index);
app.use('/users', users);
app.post('/register', register.register)

app.post('/authenticate', (req, res, next)=>{
	var username = req.body.username;
	var password = req.body.password;
	User.findUserByUserName(username, (err, user)=>{
		if(err) throw err;
		if(!user){
			return res.json({success:false, msg:'User not found'})
		}

	User.comparePassword(password, user.password, (err, Match)=>{
		if(err) throw err;
		if(Match){
			var token = jwt.sign({username: user.username, expiresInSeconds:3600}, config.secret, {
					// expiresInSeconds: 60
			});
			res.json({
				success:true,
				token: "Bearer "+token,
				user: {
					id: user._id,
					name: user.name,
					username: user.username,
					email: user.email
				}
			})
		}
		else{
			return res.json({success: false,status:130, msg: 'Wrong Password'})
		}

	})
	})

})


app.get('/profile', passport.authenticate('jwt', {session:false}), profile.info)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
