/*************************************************************************************
      	Header page contains the nav bar for navigation between different componenets
**************************************************************************************/

var React = require("react");
var Link = require("react-router").Link;
var browserHistory = require("react-router").browserHistory;

var Header = React.createClass({

	handleLogout: function() {
		localStorage.removeItem("loggedIn");
		browserHistory.push("/login");
	},

	render: function(){
		//links to handle the local storage session
		var links;
		if (localStorage.getItem("loggedIn")) {
			links = (
				<ul className="nav nav-pills">
					<li role="presentation"><a href="#" class="navbar-left"><img id="logo-nav" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/250px-Studio_Ghibli_logo.svg.png" /></a></li>
					<li role="presentation"><Link to="/">Home</Link></li>
	  				<li role="presentation"><Link to="movie">Movie</Link></li>
	  				<li role="presentation"><Link to="feedback">Feedback</Link></li>
					<li role="presentation" className="logout" onClick={this.handleLogout}>Logout</li>
				</ul>
			)
		} else {
			links = (
				<ul className="nav nav-pills">
					<li role="presentation"><a href="#" class="navbar-left"><img id="logo-nav" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/250px-Studio_Ghibli_logo.svg.png" /></a></li>
					<li role="presentation" className="right"><Link to="login" >Login</Link></li>
	  				<li role="presentation" className="right"><Link to="register" >Register</Link></li>
	  			</ul>
			)
		}
		return(
			<div className="header"> 
				<nav className="navbar navbar-default">	
				{links}
				</nav>
			</div>
		)
	}
})

module.exports = Header;

/* 
	CSS
	https://codepen.io/ace-subido/pen/Cuiep
*/