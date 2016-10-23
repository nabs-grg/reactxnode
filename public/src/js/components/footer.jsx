/******************************************************************
                        FOOTER COMPONENT
*******************************************************************/

var React = require("react");

var Footer = React.createClass({

	render: function(){
		return(
			
			<div className="container-fluid  panel-footer">
				<p id="footer-title">&copy; 2016 Studio Ghibli</p>
			</div>
			
		)
	}
})

module.exports = Footer;