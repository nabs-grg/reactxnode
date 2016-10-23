/********************************************************************************************************
                        MOVIE STORE - contains movie for the movie componenets
*********************************************************************************************************/

var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
//var Dispatcher = require('../dispatchers/appDispatcher.js');

//list of Studio Ghibli movies
var _movie = [
	{
		title: "Grave of the Fireflies",
		japanese_title : "火垂るの墓 - Hotaru no Haka",
		release_date : "1988",
		duration: "1hr 28min",
		image: "http://static.rogerebert.com/uploads/movie/movie_poster/grave-of-the-fireflies-1988/large_bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg"

	},
	{

		title: "Spirited Away",
		japanese_title : "千と千尋の神隠し - Sen to Chihiro Kamikakushi",
		release_date : "2001",
		duration: "2hr 5min",
		image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_UY1200_CR110,0,630,1200_AL_.jpg"
	},
	{

		title: "My Neighbor Totoro",
		japanese_title : "となりのトトロ - Sen to Chihiro Kamikakushi",
		release_date : "1988",
		duration: "1hr 26min",
		image: "http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781421561226_9781421561226_hr.jpg"
	}
];

var MovieStore = merge(EventEmitter.prototype, {

	getMovie: function(){
		console.log("getting movies");
		return _movie;

	}
});

module.exports = MovieStore;

