var blinkPlanet = function(top, left) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.apply(this, arguments);

  // var oldStep = this.step;
  // this.step = function() {
  // console.log("1")

  //   oldStep.call(this);
  //   this.$node.toggle();
  // };

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = blinkyDancer.step;
  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
  // return blinkyDancer;
// };
};

blinkPlanet.prototype = Object.create(makeDancer.prototype);
blinkPlanet.prototype.step = function() {
  var context = this;
  var blinkInterval = setInterval(function(){    
    context.$node.toggle();
  },50);
  // window.intervals.push(blinkInterval);
};