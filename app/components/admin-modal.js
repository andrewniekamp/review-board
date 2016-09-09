import Ember from 'ember';

export default Ember.Component.extend({
  showAdmin: false,

  actions: {
    adminFormShow() {
      this.set('showAdmin', true);
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
