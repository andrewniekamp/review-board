import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  score: DS.attr(),
  time: DS.attr(),
  product: DS.belongsTo('product', {async: true})
});
