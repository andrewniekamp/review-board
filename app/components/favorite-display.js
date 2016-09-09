import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    emptyFaves() {
      this.get('favorites').empty();
    },
    removeFromFaves(product) {
      this.get('favorites').remove(product);
    },
  }
});
