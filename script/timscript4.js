$(document).ready(function(){


  	var container = document.getElementById('container');
  timhead();

	function timhead(){
		
	
	var x = document.createElement("IMG");
		x.src='images/timhead.png';
		x.style.position='absolute';


		x.style.left='610px';
		x.style.top='300px';
		x.style.width='220px';
	
	x.style.zIndex=3;
$(x).addClass('animation');
$(x).addClass('clockwise');

	
	container.appendChild(x);

	}


						
						






});


