var makeAnotherDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeAnotherDancer.prototype = Object.create(makeDancer.prototype);
makeAnotherDancer.prototype.constructor = makeAnotherDancer;
makeAnotherDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({"left":"+=50px"},"slow");
  if(this.$node.position().left > 600) {
    this.$node.stop(true);
  }
};