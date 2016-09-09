import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRev5(params) {
      this.sendAction('saveRev6', params);
    },
  }
});
