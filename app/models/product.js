import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  summary: DS.attr(),
  date: DS.attr(),
  // platform: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
