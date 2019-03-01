

$(document).ready(function(){
	$('#startanim').click(function(){
action();
	});

	$('#return').click(function(){
		
		window.location.href="../games.html";
	});
	
	
	
});


function action(){


$('#marm').addClass('marmclass');	
$('#guy').addClass('guyclass');	
$('#guy2').addClass('guy2class');	
$('#guy3').addClass('guy3class');	


		setTimeout(function(){
		
		var snd=new Audio("sound/squish.mp3");
		snd.play();
		
	},1950);



	

}
