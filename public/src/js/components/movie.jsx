/*****************************************************************************************************************
                        MOVIE COMPONENT - contains the inforamtion of the Studio Ghibli movie
*******************************************************************************************************************/

var React = require("react");
var MovieStore= require("../stores/movieStore.js");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");

var Movie = React.createClass({

	getInitialState: function() {
    	return {
      		movie: MovieStore.getMovie()
    	}	
  	},

 	componentDidMount: function() {
    	AppStore.on('movie', this.handleDataChange);
  	},

  	onClickMovie : function(e){
    	var key = e.target.id;
    	this.setState({
    		modal: key
    	})
  	},

	render: function() {
		var self = this;
		var movie = self.state.movie.map(function(movie,i){

		 	return (
		 		<div key={i} id="movie">
					<p><label>Title : </label>{movie.title}</p>
					<p><label>Japanese Title : </label>{movie.japanese_title}</p>
					<p><label>Release Date : </label>{movie.release_date}</p>
					<p><label>Duration : </label>{movie.duration}</p>
					<p><img id="image-modal" src={movie.image} /></p>
					<button id={i} className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={this.onClickMovie}>More Information</button>
				<div className="modal fade bd-example-modal-lg" id={i} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
	  						<img id="modal-img" src={movie.image}></img>
						</div>
					</div>
				</div>

				<hr />
				
				</div>
		 	)
	 	}.bind(this)); 

	    return (
	 		<div className="movies"> 
	 			<h1 id="list-movie">List of Studio Gibhli Movies</h1>
	 			<hr />
	 			<h1>{movie}</h1>
	 		</div>
    	)
  	}

});

module.exports = Movie;