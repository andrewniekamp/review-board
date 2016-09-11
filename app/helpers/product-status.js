import Ember from 'ember';

export function productStatus(params/*, hash*/) {
  var product = params[0];

  if(product.get('reviews').get('length') === 0) {
    return Ember.String.htmlSafe('<p><span class="glyphicon glyphicon-exclamation-sign"></span> No reviews</p>');
  }
}

export default Ember.Helper.helper(productStatus);
