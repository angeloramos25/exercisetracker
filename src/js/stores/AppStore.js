var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	showForm: function() {
		_showForm = true;
	},
	getShowForm: function() {
		return _showForm;
	},
	addWorkout: function(workout) {
		_workouts.push(workout);
	},
	getWorkouts: function() {
		return _workouts;
	},
	receiveWorkouts: function(workouts) {
		_workouts = workouts;
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SHOW_FORM:
			AppStore.showForm();
			AppStore.emitChange();
			break;
		case AppConstants.ADD_WORKOUT:
			AppStore.addWorkout(action.workout);
			AppAPI.addWorkout(action.workout);
			AppStore.emitChange();
			break;
		case AppConstants.RECEIVE_WORKOUTS:
			AppStore.receiveWorkouts(action.workouts);
			AppStore.emitChange();
			break;
	}

	return true;
});

module.exports = AppStore;
