$(document).ready(function(){
  $("#top-load-section").animate({
    width: "100%"
  }, {
    duration: 500,
    easing: 'linear'
  });

  $("#top-load-section").delay(1000).css("float", "left");
  $("#tri-loader").css("display","block").delay(100);
});
