// Use the 'tip' data found in data.js
// Randomly arrange the elements in the array
data.sort( function() { return 0.5 - Math.random() } );
var tipCounter = 0;

$(document).ready(function(){
  // Originally set the tip to a random tip from the data
  changeTip();

  introAnimations(); // Play all the opening anitmation

  // If the a key is pressed
  $(document).keypress(function(e) {
    // Check the javascript key code for 'a', 'A', or enter
    if(e.which == 65 || e.which == 13 || e.which == 97) {
      aPressed();
    }
  });

  // This waits until the logo has fully loaded
  $("#split-logo").promise().done(function(){
    outroAnimations();
  });
});

// function to handle all of the closing animations
function outroAnimations(){

  // Animate the 'next tip' dialouge fading out
  $("#next-tip").animate({
    opacity: "0",
  }, {
    duration: 500,
    easing: 'linear'
  });

  // Animate the 'tip' description fading out
  $("#loading-description").delay(500).animate({
    opacity: "0",
    left: "56px"
  }, {
    duration: 500,
    easing: 'linear'
  });

  // Animate the 'tip' fading out
  $("#loading-title").delay(500).animate({
    opacity: "0",
    left: "56px"
  }, {
    duration: 500,
    easing: 'linear'
  });

  //Change the css so the tip appears to be coming from the left again
  $("#loading-description").queue(function (next) {
    $(this).css('left', '40px');
    next();
  });

  $("#loading-title").queue(function (next) {
    $(this).css('left', '40px');
    next();
  });

  // Edit the attributes for the 'buffer zone' to get it ready to wipe
  $("#top-wipe").addClass('reverse');
  $("#top-wipe").css('left', 'auto');
  $("#top-wipe").css('right', '-150px');

  // Not sure why the width has to be set to +185 instead of +150
  // It has something to do with the -7deg skewX CSS that the element has on it
  // But I counldn't figure out why, or how to fix it
  var width = $('#loading-container').width() + 185;

  // Animate the top bar disappearing
  $("#end-wipe").delay(500).animate({
    width: width + "px"
  }, {
    duration: 500,
    easing: 'linear'
  });

  // Animate the 'buffer zone' between the lighter bar and darker background
  $("#top-wipe").delay(500).animate({
    right: "100%",
    margin: '0 -1px 0 0' // There was a small gap when set to 0
  }, {
    duration: 500,
    easing: 'linear'
  });

  // Animate the logo fading out
  $("#loading-logo").delay(250).animate({
    opacity: "0",
  }, {
    duration: 1000,
    easing: 'linear'
  });

  // Animate the loading screen disappearing
  $("#loading-container").delay(2000).fadeOut(1000);

}

// function to handle all of the opening animations
function introAnimations() {

    // Animate the lighter bar expanding when page is loaded
    $("#top-load-section").animate({
      width: "105%" // set the width to 105 so there's no gap with the buffer zone
    }, {
      duration: 500,
      easing: 'linear'
    });

    // get rid of the extra space we created due to the buffer zone
    $("#top-load-section")
    .queue(function (next) {
      $(this).css('width', '100%');
      next();
    });

    // Animate the 'buffer zome' between the lighter bar and
    $("#top-wipe").animate({
      left: "-150px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'tip' description fading in
    $("#loading-description").delay(500).animate({
      opacity: "1",
      left: "48px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'tip' fading in
    $("#loading-title").delay(600).animate({
      opacity: "1",
      left: "48px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the logo fading in
    $("#loading-logo").delay(750).animate({
      opacity: "1",
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate statistics fading in
    $("#statistics").delay(1500).animate({
      opacity: "1",
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate beasts fading in
    $("#divine-beasts").delay(1500).animate({
      opacity: "1",
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'next tip' dialouge fading in
    $("#next-tip").delay(4000).animate({
      opacity: "1",
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'next tip' dialouge fading in
    $("#split-logo").delay(5000).animate({
      width: "100%"
    }, {
      duration: 10000,
      easing: 'linear'
    });
}

//Function to switch out the text in the tip section
function changeTip(){
  $("#loading-title h3").text(data[tipCounter][0]);
  $("#loading-description p").text(data[tipCounter][1]);

  // Increase the tipCounter but make sure we don't go over the array length
  tipCounter = (tipCounter + 1) % (data.length - 1);
}

// Function to handle what happens if the a key is pressed
function aPressed() {
  // Check to see if pressing a is valid at this point
  if( $("#next-tip").css('opacity') == '1') {

    // Animate the 'next tip' dialouge fading out
    $("#next-tip").animate({
      opacity: "0",
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'tip' description fading out
    $("#loading-description").animate({
      opacity: "0",
      left: "56px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'tip' fading out
    $("#loading-title").animate({
      opacity: "0",
      left: "56px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    //Change the css so the tip appears to be coming from the left again
    $("#loading-description").queue(function (next) {
      $(this).css('left', '40px');
      next();
    });

    $("#loading-title").queue(function (next) {
      $(this).css('left', '40px');
      next();
    });

    // Call the changeTip funtion after the animations have finished
    setTimeout(function() { changeTip(); }, 500);

    // Animate the 'tip' description fading in
    $("#loading-description").animate({
      opacity: "1",
      left: "48px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'tip' fading in
    $("#loading-title").animate({
      opacity: "1",
      left: "48px"
    }, {
      duration: 500,
      easing: 'linear'
    });

    // Animate the 'next tip' dialouge fading in
    $("#next-tip").delay(2000).animate({
      opacity: "1",
    }, {
      duration: 500,
      easing: 'linear'
    });

  }
}
