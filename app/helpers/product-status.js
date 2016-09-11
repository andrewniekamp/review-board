import Ember from 'ember';

export function productStatus(params/*, hash*/) {
  var product = params[0];

  if(product.get('reviews').get('length') === 0) {
    return Ember.String.htmlSafe('<p><span class="glyphicon glyphicon-exclamation-sign"></span> No reviews</p>');
  } else {
    var score = product.get('aveOfScores');
    return Ember.String.htmlSafe('<p>Average review: ' + score + '</p>');
  }
}

export default Ember.Helper.helper(productStatus);
