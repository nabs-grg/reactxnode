/******************************************************************
                        LOGIN COMPONENTS
*******************************************************************/

var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");
var browserHistory = require("react-router").browserHistory;

var Login= React.createClass({

  getInitialState : function(){
    return {
      username : '',
      password : '',
      status   : AppStore.getRegister(),
    }
  },

  getUsernameData : function(e){
	this.setState({
	  username : e.target.value
	});
  },

  getPasswordData : function(e){
	this.setState({
      password : e.target.value
	});
  },

  componentDidMount: function() {
  	if(this.state.status){
      localStorage.setItem('myFirstKey', 'Hello world');
      browserHistory.push('/')
    }

    AppStore.on("login", function() {
    	console.log("YO");
    	localStorage.setItem("loggedIn", true);
        browserHistory.push("/");

    }.bind(this));
  },

  onClickLogin : function(e){
  	e.preventDefault();
    Dispatcher.dispatch({
      	data : {
            username : this.state.username,
            password : this.state.password
        },
        action : 'login'
    })
  },

  render: function() {
		return(

  			<div className="login-page">
  			<img  className="image-register" src="http://studioghiblimovies.com/wp-content/uploads/2014/12/howls-moving-castle-anime-hd-wallpaper-1920x1080-1256.jpg"/>
  				<h1 className="studio-ghibli">WELCOME TO STUDIO GHIBLI</h1>
    			<form className="form-signin" onSubmit={this.onClickLogin}>       
      			<h3 className="form-signin-heading">Login</h3>
      			<label className="label-login"> 
      			Username <b />
      			<input type="text" id="login-label-one" className="form-control" onChange={this.getUsernameData} name="username" placeholder="Username" required />
      			</label>

      			<label className="label-login">
      			Password <b />
      			<input type="password" id="login-label-two" className="form-control" onChange={this.getPasswordData} name="password" placeholder="Password" required /> 
      			</label> 

      			<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    			</form>
  			</div>
  		
			
		)
	}
})

module.exports = Login;

/*
  CSS
	https://codepen.io/ace-subido/pen/Cuiep
*/