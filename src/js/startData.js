module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('workouts', JSON.stringify([
      {
        id: 00001,
        type: 'Running',
        minutes: 20,
        miles: 2,
        date: new Date()
      },
      {
        id: 00001,
        type: 'Yoga',
        minutes: 40,
        miles: '',
        date: new Date()
      }
    ]))
  }
}
