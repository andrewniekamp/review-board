import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  summary: DS.attr(),
  date: DS.attr(),
  // platform: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  reviews: DS.hasMany('review', {async: true}),

  scores: Ember.computed.mapBy('reviews', 'score'),
  sumOfScores: Ember.computed.sum('scores'),
  aveOfScores: Ember.computed('sumOfScores', 'scores.length', function() {
    return this.get('sumOfScores') / this.get('scores.length');
  })
});
