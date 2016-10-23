/******************************************************************
      React Router to help with the navigation of the components
*******************************************************************/

var React = require("react");
var ReactDOM = require("react-dom");

var Movie= require("./components/movie.jsx");
var Header = require("./components/header.jsx");
var Footer= require("./components/footer.jsx");
var Home= require("./components/home.jsx");
var Main = require("./main.jsx");
var Login= require("./components/login.jsx");
var Feedback = require("./components/feedback.jsx");
var Register = require("./components/register.jsx");

//Store 
var AppStore = require("./stores/appStore.js");
var MovieStore = require("./stores/movieStore.js");

//setting up react routes
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var browserHistory = require('react-router').browserHistory;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
  render: function(){
    return (
      <div className="content">
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="register" component={Register}/>
            <Route path="feedback" component={Feedback}/>
            <Route path="movie" component={Movie}/>
            <Route path="login" component={Login}/>
          </Route>
        </Router>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
