$(document).ready(function(){
	
	
		setTimeout(function(){ 

		$('#trumpclick').fadeOut();

		}, 3000);
	
	var zz=3;
	var container = document.getElementById('container');
	var poopcounter=0;
	var leftpoop=270;
	var toppoop=850;
	var add=1;

	
	$('body').click(function(){
		
		blah();
		fallingpoop();
		permapoop();
		mouth();
		
	});
	
	
	function fallingpoop(){
		
	
	var x = document.createElement("IMG");
		x.src='images/turd.png';
		x.style.position='absolute';


		x.style.left='310px';

	
	x.style.zIndex=3;

$(x).addClass('poopclass2');
	zz++;

	
	container.appendChild(x);

	}
	
	function permapoop(){
		
		poopplace();
		
	
		
setTimeout(function(){ 


		var x = document.createElement("IMG");
		x.src='images/turd.png';
		x.style.position='absolute';


		x.style.left=leftpoop+'px';
		x.style.top=toppoop+'px';


			x.style.zIndex=zz;
		container.appendChild(x);

		

}, 2000);
		
		
	}
		
		function poopplace(){
			
			if(leftpoop<450){
			
					poopcounter=poopcounter+35;
					if(add==1)
					{
						
					leftpoop=leftpoop+poopcounter;	
					add=0;
					}
					else
					{
						leftpoop=leftpoop-poopcounter;
						add=1;
						
					}
			}
		
		else{
			
			leftpoop=300;
			toppoop=toppoop-20;
			poopcounter=0;
			
		}
		
		
	}
	

	
	function blah(){
		
		var snd=new Audio("blah5.mp3");
		snd.play();
		console.log('blah');
	}
	
	
	function mouth(){
		
		var donald=document.getElementById('trump');
		
		
		setTimeout(function(){ donald.src='images/trumppngb.png'; }, 500);
		setTimeout(function(){ donald.src='images/trumppnga.png'; }, 800);
		setTimeout(function(){ donald.src='images/trumppngb.png'; }, 1000);
		setTimeout(function(){ donald.src='images/trumppnga.png'; }, 1200);
		setTimeout(function(){ donald.src='images/trumppngb.png'; }, 1500);
		setTimeout(function(){ donald.src='images/trumppnga.png'; }, 1800);
		
		
	
		
	}
	
	
	
});