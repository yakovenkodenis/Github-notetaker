var React = require('react');

var Notes = React.createClass({

	propTypes: {
		username: React.PropTypes.string.isRequired,
		notes: 	  React.PropTypes.array.isRequired
	},

	render: function() {
		return (
			<div>
				<h3> Notes for {this.props.username} </h3>
				Username: {this.props.username} <br />
				Notes: 	  {this.props.notes}
			</div>
		)
	}
});

module.exports = Notes;	