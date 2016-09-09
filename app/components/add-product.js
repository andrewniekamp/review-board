import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,

  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    productFormHide() {
      this.set('addNewProduct', false);
      this.set('image', '');
      this.set('title', '');
      this.set('summary', '');
      this.set('platform', '');
      this.set('date', '');
      this.set('category', '');
    },
    saveProd1() {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        summary: this.get('summary'),
        date: Date.now(),
        platform: this.get('platform'),
        //category here needs a hidden input on handlebar to store value from setCategory below
        category: this.get('category')
      };
      //send to the action to empty/hide form on completion
      this.send('productFormHide');
      this.sendAction('saveProd2', params);
    },
    setCategory(categoryName) {
      var newCat = this.get('model.categories').findBy('name', categoryName);
      //category needs a hidden input on handlebar to store value from setCategory below
      this.set('category', newCat);
    }
  }
});
