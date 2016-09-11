import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(product) {
    if (this.get('items').includes(product)) {
      console.log("Already in Faves");
    } else {
      this.get('items').pushObject(product);
    }
  },
  remove(product) {
    var index = this.get('items').indexOf(product);
    if (index >= 0) {
      this.get('items').removeAt(index);
    }
  },
  empty() {
    this.set('items', []);
  }
});
