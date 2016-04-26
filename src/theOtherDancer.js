var makeTheOtherDancer = function(top, left, timeBetweenSteps) {

  makeDancer.apply(this, arguments);

};

makeTheOtherDancer.prototype = Object.create(makeDancer.prototype);
makeTheOtherDancer.prototype.constructor = makeBlinkyDancer;
makeTheOtherDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({"top":"+=30px"},"slow");
  if(this.$node.position().top > 600) {
    this.$node.stop(true);
  }
};
