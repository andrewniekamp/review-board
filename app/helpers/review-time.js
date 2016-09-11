import Ember from 'ember';

export function reviewTime(params/*, hash*/) {
  var time = new Date(params[0]);
  return time.toLocaleString();
}

export default Ember.Helper.helper(reviewTime);
