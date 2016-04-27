var movePlanet = function(top, left) {
  makeDancer.apply(this, arguments);

};

movePlanet.prototype = Object.create(makeDancer.prototype);
movePlanet.prototype.step = function() {

  var position = this.$node.offset();

  var context = this;
  var moveInterval = setInterval(function(){
  	var newposition = {};
  	newposition["top"] = Math.floor(($(window).height() -300) * Math.random());
  	newposition["left"] = Math.floor(($(window).width() -300) * Math.random());
    context.$node.animate(newposition,"slow");
  }, 1000);
  window.intervals.push(moveInterval);

};
