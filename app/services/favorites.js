import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    if (this.get('products').includes(product)) {
      console.log("ALREADY ADDED BRAH");
    } else {
      this.get('products').pushObject(product);
    }
  },
  remove(product) {
    var index = this.get('products').indexOf(product);
    if (index >= 0) {
      this.get('products').removeAt(index);
    }
  },
  empty() {
    this.set('products', []);
  }
});
