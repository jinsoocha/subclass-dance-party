// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};
  this.timeBetweenSteps = arguments[2];
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="src/tumblr_nmne8l53mn1u5ka03o1_500.gif"></img></span>');
  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();
  this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);
  this.setPosition(top, left);

};

makeDancer.prototype.constructor = makeDancer;

makeDancer.prototype.step = function() {
  // console.log(this)
  var context = this;
  setTimeout(context.step.bind(this), context.timeBetweenSteps);
};



makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
