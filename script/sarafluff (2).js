


/*
$('#fluffoot').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    alert('ok');
	sara.style.display = 'none';
  });*/
  
  

	

$(document).ready(function(){
	$('#fluffnofoot').click(function(){
action();
	});

});


function action(){


$('#fluffoot').addClass('animate');	

setTimeout(function(){
	$('#sara').addClass('moveup');
	
},100);




setTimeout(function(){ 

$('#sara').hide();

 }, 250);

setTimeout(function(){ 

$('#saralegs').show();

 }, 400);
	
	
	setTimeout(function(){
		
		var snd=new Audio("burp.mp3");
		snd.play();
		
	},3000);
	
		setTimeout(function(){
			
$('#saralegs').addClass('drop');
		
	},3200);
	
	
		setTimeout(function(){
		
		var snd=new Audio("meow.mp3");
		snd.play();
		
	},5000);
}


/*		  $("#fluffoot").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
					  function(event) {
			alert('ok');
		  });  */