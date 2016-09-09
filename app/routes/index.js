import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveCat5(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
    saveProd5(params) {
      var newProduct = this.store.createRecord('product', params);
      var category = params.category;
      category.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    },
    saveRev9(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      // is this necessary?
      // this.transitionTo('index');
    },
  }
});
