// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};
  var context = this;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // this.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(context.step, timeBetweenSteps);
  // };
  // this.step

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

  // return dancer;
};

makeDancer.prototype.step = function() {
  var context = this;
  setTimeout(context.step, timeBetweenSteps);
}