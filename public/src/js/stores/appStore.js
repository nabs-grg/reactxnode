var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var register = false;
var login = false;
var feedback = false;
var showFeedback = [];

var AppStore = merge(EventEmitter.prototype, {
	getRegister: function(){
		console.log("getting register");
		return register;
	},

	getLogin: function(){
		console.log("getting login");
		return login;
	},

	getFeedback: function(){
		console.log("get feedback");
		return feedback;
	},

  getShowFeedback: function(){
    console.log("show feedback");
    return showFeedback;
  }
});

module.exports = AppStore;

Dispatcher.register(handleAction);

function handleAction(payload){

	var self = this;

	if(payload.action === 'login'){
		axios.post('http://localhost:3000/login', {
      data: {
        username: payload.data.username,
        password: payload.data.password
      }  	
    })
    .then(function (response) {
      console.log(response);
     if(response.data === 'LOGIN'){
       AppStore.emit("login");
       console.log('user is logged in sucess');
     }
    })
    .catch(function (error) {
      console.log(error);
    });

  }else if(payload.action === 'register'){

    axios.post('http://localhost:3000/register', {
      	name: payload.data.name,
     	username: payload.data.username,
      	email: payload.data.email,
      	password: payload.data.password
    })
    .then(function (response) {
      AppStore.emit("register");
      console.log(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });

  } else if(payload.action === 'feedback'){

    axios.post('http://localhost:3000/feedback', {
      name: payload.data.name,
      select: payload.data.select,
      message: payload.data.message
    })
    .then(function(response){
      AppStore.emit("feedback");
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    });

  } else if(payload.action === 'showFeedback'){
    axios.get('http://localhost:3000/api/feedback')
      .then(function (response) {
        console.log(response);
        showFeedback = response.data;
        AppStore.emit("showFeedback");
    })
      .catch(function (error) {
      console.log(error);
    });
  }

}