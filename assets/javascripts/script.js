$(document).ready(function() {
  $.vegas('slideshow', {
    backgrounds:[
      { src: '/assets/images/background.jpg' }
    ]
  })('overlay');

  $(".content").css("display", "none");
  $(".content").fadeIn(2000);
});
