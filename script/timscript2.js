$(document).ready(function(){

var direction='';
var timvar=$('#tim');

  init();
  
  function init(){

	  picdir();

	  
  }

  
  
  
  
  
  function picdir(){
console.log('picking new direction');
//x=Math.floor((Math.random() * 6) + 1);
x=4;
switch(x){
	case 1:direction='clockwise';
        break;
	case 2:direction='counterclockwise';
        break;
	case 3:direction='up';
        break;
	case 4:direction='down';
        break;
	case 5:direction='left';
        break;
	case 6:direction='right';
	    break;



}
console.log('now add the class'+direction);
addtheclass(direction);
  }
  
  
  
  
  
  function addtheclass(direction){
				console.log('addtheclass function triggered');
					  $("#tim").addClass(direction);
						$("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
							  function(event) {

							$('#tim').addClass("right");	
							  $("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
									function(event) {
									  $('#tim').addClass("clockwise");	
									   $("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
											function(event) {

											$('#tim').addClass("counterclockwise");	
											$("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
												function(event) {
													$('#tim').addClass("up2");	
														$("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
														function(event) {
															$('#tim').addClass("left2");	
																$("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
																function(event) {
																	$('#tim').removeClass();
																});
																		});
																});
															});
														});
												});
  
										};



});


/*
console.log($('#tim').css("top"));
$('#tim').addClass('down');

console.log($('#tim').css("top"));  */