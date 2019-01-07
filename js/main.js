$(document).ready(function(){

  introAnimations(); // Play all the opening anitmation

  // If the a key is pressed
  $(document).keypress(function(e) {
    // Check the javascript key code for 'a', 'A', or enter
    if(e.which == 65 || e.which == 13 || e.which == 97) { 
      aPressed();
    }
  });
});

// Function to handle what happens if the a key is pressed
function aPressed() {
  // Check to see if pressing a is valid at this point
  if( $("#next-tip").css('opacity') == '1') {
    alert("hey!");
  }

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
