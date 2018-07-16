var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddForm = React.createClass({
	render: function(){
		return(
			<form onSubmit={this.onSubmit}>
        <div className="form-group">
          <h4>Exercise Type</h4>
          <select className="form-control" ref="type">
            <option value="Running">Running</option>
            <option value="Weights">Weights</option>
            <option value="Squats">Squats</option>
            <option value="Yoga">Yoga</option>
            <option value="Sports">Sports</option>
            </select>
        </div>
        <div className="form-group">
          <h4>Minutes</h4>
          <input type="text" className="form-control" ref="minutes" />
        </div>
        <div className="form-group">
          <h4>Miles</h4>
          <input type="text" className="form-control" ref="miles" />
        </div>
        <button type="submit" className="btn btn-secondary btn-block">Log Exercise</button>
      </form>
		);
	},
  onSubmit: function(event) {
    event.preventDefault();
    var workout = {
      id: this.generateId(),
      type: this.refs.type.value.trim(),
      minutes: this.refs.minutes.value.trim(),
      miles: this.refs.miles.value.trim(),
      date: new Date()
    }
    AppActions.addWorkout(workout);
  },
  generateId: function() {
    var id = '';
    var possible = '0123456789';

    for (var i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
});

module.exports = AddForm;
