var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Workout = require('./Workout.js');


var Workouts = React.createClass({
	render: function(){
		return(
      <div>
      <h4>Workouts</h4>
			<ul className="list-group">
        {
          this.props.workouts.map(function(workout, i){
            return (
              <Workout workout={workout} key={i} />
            )
          })
        }
      </ul>
      </div>
		);
	}
});

module.exports = Workouts;
