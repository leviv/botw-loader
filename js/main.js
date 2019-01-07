$(document).ready(function(){

  // Animate the lighter bar expanding when page is loaded
  $("#top-load-section").animate({
    width: "105%"
  }, {
    duration: 500,
    easing: 'linear'
  });

  // Animate the 'buffer zome' between the lighter bar and
  $("#top-wipe").animate({
    left: "-150px"
  }, {
    duration: 500,
    easing: 'linear'
  });
});
