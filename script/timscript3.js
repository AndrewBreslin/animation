$(document).ready(function(){

var direction='';
var timvar=$('#tim');
var timleft=600;
var timtop=150;

  init();
  console.log('left:'+timleft);
  console.log('top:'+timtop);
  
  
  function init(){

	  picdir();

	  
  }

  
  
  
  
  
  function picdir(){
console.log('picking new direction');
//x=Math.floor((Math.random() * 4) + 1);
x=4;


console.log('now add the class'+x);
addtheclass(x);
  }
  
  
  
  
  
  function addtheclass(x){
				console.log('addtheclass function triggered');
				
				switch(x){

					case 1:direction='up';timtop-=100;
						break;
					case 2:direction='down';timtop+=100;
						break;
					case 3:direction='left';timleft-=100;
						break;
					case 4:direction='right';timleft+=100;console.log('x is 4');
						break;
					case 5:direction='clockwise';
						break;
					case 6:direction='counterclockwise';
						break;



				}
				
				
				
					  $("#tim").addClass(direction);
						$("#tim").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
							  function(event) {
									  console.log('left:'+timleft);
									console.log('top:'+timtop);


	      	      

									$('#tim').removeClass(direction);
									setTimeout(function() {
										$('#tim').addClass(direction);
									},1);




						
						


												});
  
										};



});


