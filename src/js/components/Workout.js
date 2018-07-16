var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Workouts = React.createClass({
	render: function(){
		return(
			<li className="list-group-item">
        {this.props.workout.type} - {this.props.workout.minutes} Minutes | {this.props.workout.miles} Miles
      </li>
		);
	}
});

module.exports = Workouts;
