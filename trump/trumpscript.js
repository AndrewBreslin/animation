$(document).ready(function(){
	
	
	var zz=3;
	var testy=-595;
	var testx=175;
	
	$("#trump").click(function(){
		
		myfunction();
		
		
	});
	
	
	function myfunction(){
		
		
	var x = document.createElement("IMG");
		x.src='images/turd.png';
		x.style.position='relative';

		x.style.top=testy+'px';
		x.style.left=testx+'px';
	testx=testx-177;
	
	x.style.zIndex=zz;
	zz++;
	var container = document.getElementById('container');
	
	container.appendChild(x);
		$(x).addClass('poopclass2');

		$(x).addClass('poopclass');
	
	
	
//
	}
	
	function moveturd(){
		
		$('#turd').addClass('poopclass');
		
	}
	
});