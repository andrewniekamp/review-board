import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  modalShowing: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('modalShowing');
    },
    emptyFaves() {
      this.get('favorites').empty();
    },
    removeFromFaves(product) {
      this.get('favorites').remove(product);
    },
  }
});
