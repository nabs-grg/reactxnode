/*************************************************************************************************************************
                        MAIN COMPONENET - all the componenets in the index.js depends on this jsx.page
**************************************************************************************************************************/

var React = require("react");
var Header = require("./components/header.jsx");
var Footer= require("./components/footer.jsx");
var Home= require("./components/home.jsx");

var AppStore = require("./stores/appStore.js");



var Main = React.createClass({
  componentDidMount: function() {
    var self = this;
    AppStore.on("login", function() {
      self.forceUpdate();
      console.log('hello');
    })
  },

  render: function(){
    return (
      <div>
        <Header/>
        <main>
        {
          this.props.children
        }
        </main>
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;