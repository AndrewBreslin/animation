$(".button").click(function(){
  $(this).addClass("animate");
  $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    alert('ok');
  });
});

