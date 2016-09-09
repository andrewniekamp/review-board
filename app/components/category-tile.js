import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRev7(params) {
      this.sendAction('saveRev8', params);
    },
  }
});
