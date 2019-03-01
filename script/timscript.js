

$(document).ready(function(){
	
var x=0;
var timshead=document.getElementById('tim');




init();
var timsy=$('#tim').css('top');


//console.log($('tim').css('top'));


function init(){
		setTimeout(function(){ loop();}, 1000);

}

	
function loop(){

//x=Math.floor((Math.random() * 6) + 1);
x=4;




/*switch(x){
	case 1:$('#tim').addClass('clockwise');
        break;
	case 2:$('#tim').addClass('counterclockwise');
        break;
	case 3:$('#tim').addClass('up');
        break;
	case 4:$('#tim').addClass('down');
        break;
	case 5:$('#tim').addClass('left');
        break;
	case 6:$('#tim').addClass('right');
	    break;


	}*/

	$('#tim').css("top",timsy);
	
	timshead.classList.remove();
	 timshead.offsetWidth = timshead.offsetWidth;
	 timshead.classList.add('down');

	
	
	 
	 
	 
	 
newfunct();
}

function newfunct(){
	console.log(x);
	//$('#tim').removeClass();
	init();
}
	
});