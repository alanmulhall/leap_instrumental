window.sliding = false;

LeapManager.init({ maxCursors: 0, enableMetaGestures: true, enableDefaultMetaGestureActions: false });

var controllerOptions = { enableGestures: true };

Leap.loop(controllerOptions, function (frame) {
  if (frame.gestures.length > 0) {
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];

      if (gesture.type === "swipe") {
        //Classify swipe as either horizontal or vertical
        var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
        //Classify as right-left or up-down
        if (isHorizontal){
          if (gesture.direction[0] > 0){
            $('.carousel').carousel('next');
            console.log('right');
          } else {
            $('.carousel').carousel('prev');
            console.log('left');
          }
        } else { //vertical
          if (gesture.direction[1] > 0){
            console.log('up');
          } else {
            console.log('down');
          }
        }
      }
    }
  }
});
