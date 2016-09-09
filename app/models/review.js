import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  time: DS.attr(),
  game: DS.belongsTo('game', {async: true})
});
