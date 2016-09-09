import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    reviewFormHide() {
      this.set('addNewReview', false);
      this.set('reviewer', '');
      this.set('subject', '');
      this.set('body', '');
      this.set('time', '');
      this.set('product', '');
    },
    saveRev1() {
      var params = {
        reviewer: this.get('reviewer'),
        subject: this.get('subject'),
        body: this.get('body'),
        time: Date.now(),
        product: this.get('product'),
      };
      //send to the action to empty/hide form on completion
      this.send('reviewFormHide');
      this.sendAction('saveRev2', params);
    }
  }
});
