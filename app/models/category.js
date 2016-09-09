import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  games: DS.hasMany('game', {async: true})
});
