var PopDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //  this.$node = $('<span class="dancer"></span>');
  //  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer popDancer"></span>');
  //  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log('inside class:', this.$node)

};


PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;


PopDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step

  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};

PopDancer.prototype.lineUp = function(top, left) {

  this.setPosition(top, left);

};
