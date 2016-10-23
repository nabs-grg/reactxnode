/**********************************************************************************************************
                       	FEEDBACK STORE - to sotre the information from the user feeback
************************************************************************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Feedback Schema
var FeedbackSchema = mongoose.Schema({
		name: String,
		select: String,
		message: String
});

var Feedback = module.exports = mongoose.model('Feedback', FeedbackSchema);

