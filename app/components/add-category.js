import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,

  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },
    categoryFormHide() {
      this.set('addNewCategory', false);
      this.set('name', '');
    },
    saveCat1() {
      var params = {
        name: this.get('name')
      };
      this.send('categoryFormHide');
      this.sendAction('saveCat2', params);
    }
  }
});
