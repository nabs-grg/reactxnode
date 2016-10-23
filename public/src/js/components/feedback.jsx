/*********************************************************************************************************
                        FEEDBACK COMPONENT - allows user to input and show feedback
***********************************************************************************************************/

var React = require("react");
var Dispatcher = require("../dispatchers/appDispatcher.js")
var AppStore = require("../stores/appStore.js");

var Feedback = React.createClass({

  getInitialState: function(){
    return {
      name: '',
      select: '',
      message: '',
      status : AppStore.getRegister(),
      feedback : ""
    }

  },

  getNameData : function(e){
    this.setState({
      name : e.target.value
    });
  },

  getSelectData : function(e){
    this.setState({
      select: e.target.value
    });
  },

  getMessageData : function(e){
    this.setState({
      message : e.target.value
    });
  },

  componentDidMount: function() {
    var self = this;
    AppStore.on('showFeedback', function() {
      console.log("yo");
      self.setState({
        feedback : AppStore.getShowFeedback()
      })
    });

  },

  onClickFeedback : function(e){
    console.log(this.state);
    Dispatcher.dispatch({
        data : {
            name : this.state.name,
            select : this.state.select,
            message : this.state.message
        },
        action : 'feedback'
    })
    location.reload();

    e.preventDefault();
  },

  onClickShowFeedback : function(e){

    Dispatcher.dispatch({
        action : 'showFeedback'
    })


    // e.preventDefault();
  },


  render: function(){
    console.log(this.state);
    if (this.state.feedback) {
      var feedback = this.state.feedback.map(function(item, i) {
        return (
          <div key={i} className="show-feedback-message">
          <h1>{item.name}</h1>
          <h4 className="style-message"><label>Movie : </label>{item.select}</h4>
          <h4 className="style-message"><label>Message : </label>{item.message}</h4>
          <hr />
          </div>
          )
      })
    } else {
      var feedback = "";
    }

    return(
     
      <div>
          <h1 className="form-signin-heading" id="title-contactForm">Feedback</h1>
          
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" id="InputName" placeholder="Enter Name" onChange={this.getNameData} required />  
            </div>

          <div className="form-group">
            <label>Select Movie</label>
            <select name="select" className="form-control" onChange={this.getSelectData} required>
              <option selected="selected">Select a movie</option>
              <option value="Grave of the Fireflies">Grave of the Fireflies</option>
              <option value="Spirited Away">Spirited Away</option>
              <option value="My Neighbour Totoro">My Neighbour Totoro</option>
            </select>

          </div>
          <div className="form-group">
            <label>Message</label>
             <textarea name="message" id="InputMessage" className="form-control" rows="5" placeholder="Enter text here..." onChange={this.getMessageData}required></textarea>  
          </div>

          <button className="btn btn-primary" id="submit-feedback" onClick={this.onClickFeedback} >Submit</button>          
          <hr />
          <button className="btn btn-primary" id="show-feedback" onClick={this.onClickShowFeedback}>Show</button>
          {feedback}
      </div>

    )
  }
})

module.exports = Feedback;

/* CSS
  http://bootsnipp.com/snippets/featured/bootstrap-3x-contact-form-layout
*/
