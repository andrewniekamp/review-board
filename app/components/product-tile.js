import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    saveRev5(params) {
      this.sendAction('saveRev6', params);
    },
    addToFaves(product) {
      this.get('favorites').add(product);
    }
  }
});
