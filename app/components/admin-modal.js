import Ember from 'ember';

export default Ember.Component.extend({
  modalShowing: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('modalShowing');
    },
    adminFormHide() {
      this.set('showAdmin', false);
    },
    saveProd3(params) {
      this.sendAction('saveProd4', params);
    },
    saveCat3(params) {
      this.sendAction('saveCat4', params);
    },
  }
});
