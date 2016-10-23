/************************************************************************************************************************************
                APPLICATION JS - contains the NPM modules, Mongo DB, middleware and routes linking to the React App
*************************************************************************************************************************************/

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var session = require('express-session');
var User = require('./models/user');
var Feedback = require('./models/feedback');

var app = express();

mongoose.connect('mongodb://localhost/reactxnode');

//use static data from public
app.use('/',express.static(__dirname + '/public'));

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json()); 

//sent cookie to the front end
app.use(cookieParser());

//middlware for express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false
}));

app.get('/api/feedback/',function(req,res,next){
  Feedback.find({},function(err, feedbacks){
     if (err) { return next(err);}
     res.json(feedbacks);
     console.log('Feedback get request');
   });
});

//if a user goes to any route then go to index.html
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', function(req, res) {
  var newUser = new User({
		name: req.body.name,
		select: req.body.select,
		message: req.body.message
  });

  User.createUser(newUser,function(err,user){
    //if(err) throw err;
    console.log(user);
  });

      res.status(200).send('ok');
});

app.post('/feedback', function(req, res, next) {
  console.log(req.body);
  var newFeedback = new Feedback({
		name: req.body.name,
		select: req.body.select,
		message: req.body.message

 });

	newFeedback.save(function(err, feedback){
		if(err) throw err;
		console.log('Feedback created');
    res.status(200).send(feedback);

	});


});

app.post('/login',function(req,res){
	console.log(req.body);

  User.getUserByUsername(req.body.data.username, function(err, user){
   if(err) throw err;
   if(!user){
      return 'error';
   }else{

    User.comparePassword(req.body.data.password, user.password, function(err, isMatch){
      if(err) throw err;
        if(isMatch){
          res.status(200).send('LOGIN');
             return true;
          } else {
          res.status(200).send('NOTLOGIIN');
            return false;
          }
        });
      }
    });
});

app.listen(3000, function(){
	console.log('listening to port 3000....');
});

 