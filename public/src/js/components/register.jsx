/****************************************************************************************************
                        REGISTER COMPONENT - contains the registration page 
*****************************************************************************************************/

var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var browserHistory = require('react-router').browserHistory;

var Register= React.createClass({

  getInitialState : function(){
    return {
      name : '',
      username : '',
      email : '',
      password : '',

      status : AppStore.getRegister() //goes to the getRegister function
    }
  },

  //when the user click register button the data are already sent
  getNameData : function(e){
  this.setState({
    name : e.target.value
  });
  },
  getUsernameData : function(e){
  this.setState({
    username : e.target.value
  });
  },

   getEmailData : function(e){
  this.setState({
    email : e.target.value
  });
  },

  getPasswordData : function(e){
  this.setState({
    password : e.target.value
  });
  },

  //get and dispatch after binding
  onClickRegister : function(e){
    Dispatcher.dispatch({
      data : {
        name : this.state.name,
        username : this.state.username,
        email : this.state.email,
        password : this.state.password
      },
      action : 'register'
    })

    AppStore.on("register", function() {
              this.setState({
                status: true
              })
              browserHistory.push("/login");
            }.bind(this))

    e.preventDefault(); //prevent the browser forom rendering

  },

	render: function(){
		return(
			
			<div>
       <img  className="image-register" src="http://studioghiblimovies.com/wp-content/uploads/2014/12/howls-moving-castle-anime-hd-wallpaper-1920x1080-1256.jpg"/>
  			<form className="form-signin">
    			<h3 className="form-signin-heading">Register New User</h3>

          <label className="label-register"> 
          Name <b />
          </label>
          <input type="text" className="form-control" name="name" onChange={this.getNameData} placeholder="Name" required/>
          

    			<label className="label-register"> 
    			Username <b />
          </label>
    			<input type="text" className="form-control" name="username" onChange={this.getUsernameData}  placeholder="Username" required/>
    			
          <label className="label-register"> 
          Email <b />
          <input type="text" className="form-control" name="email" onChange={this.getEmailData}  placeholder="Email Address" required/>
          </label>

    			<label className="label-register">
    			Password <b />
          </label> 
    			<input type="password" className="form-control" name="password" onChange={this.getPasswordData} placeholder="Password" required /> 
    			    
    			
    			<button className="btn btn-lg btn-primary btn-block" onClick={this.onClickRegister} type="submit">Register</button>   
  			
        </form>
			
      </div>		
		)
	}
})

module.exports = Register;
