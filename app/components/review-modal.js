import Ember from 'ember';

export default Ember.Component.extend({
  modalShowing: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('modalShowing');
    },
    saveRev3(params) {
      this.sendAction('saveRev4', params);
    }
  }
});
