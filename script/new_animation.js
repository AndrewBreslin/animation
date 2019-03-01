$(document).ready(function(){
	var anim='';
	var picselect='';
	var container=document.getElementById('container');
		var picarray=['gnome','davehead','bacon','banana','cherub2','cherub1','cow','dancer','cigar','venus','penguin2','cop','fancyskull','oldman','devil','skeleton','sircat','pignun','bosheman','happyearth','bogie','wizard','catbrownspot','adam','concentric','egg','fluff','aldrin','armstrong','artdeco','alien','oldpicboygirl','yinyang','owl','mouth','goldfish2','bee','oldpic2','trippy','baseball','olddraw1','lute','ladycat','aardvark','peacealien','rabbit','bagel','donut','boopfront','boopside','apple','saturn','scream','opil1','opil2','opil3','opil4','lioncar','aardvark','butterfly2','widow','felix','whale','peace','billiard','butterfly','goldfish','pig','escher','balloon','penguin','moon','moon2','fairy','banjo','timhead','sarahead','bernhead','adamhead','marmpng','lightbulb','magickitty','whitekitty2','einsteinhead','cheese','marilyn','octopus','cheese','handshake','pacman','mushroom1','mushroomcloud','hendrix','hendrix2','scarecrowhead','fluffyhead','tire','elephant','lightbulb','magickitty','whitekitty2','einsteinhead','cheese','marilyn','octopus','cheese','handshake','pacman','mushroom1','mushroomcloud','hendrix','hendrix2','scarecrowhead','fluffyhead','tire','elephant','platypus','chaplin','robin','mona_lisa','unicorn','pyramid','smiley'];
		var animarray=['spiral','orbit','starwars','superspin','dance','screwball','stretch','soup','bobble','bigfade','spinr','spinl','fadeout','fadein','right','left','up','down','clockwise','counterclockwise','flipx','flipy','big','small','rspin','lspin','uspin','dspin','rollr','rolll','allspin','thin','fat','flat','tall','uberwack','uberwack2','zigzag','morph'];
	var intervalid='';
	

	
	startit();
	
	/*
		$("#container").click(function(){
		
		if(!intervalid){startit();}
			else {stopit();}
		
		
		
		});
	*/

	
	function stopit(){
		
				console.log('k');
		
		window.clearInterval(intervalid);
		intervalid= false;
	}
	
	function startit(){
		
	setbackground();
	music();
	intervalid=window.setInterval(function(){ action(); }, 500);
	}

	


	
	
	
function music(){
	
	
	var musicnum=numto(21);
	
	snd=new Audio("music/"+musicnum+".mp3");
snd.play();
	
}	
	
	
function action(){
		
	picanim();
	pickpic();
	makeimage();

		
	}
	
	

	
function setbackground(){
	backgroundcount=numto(17);
	//backgroundcount++;
	//if (backgroundcount>17){backgroundcount=1;}
	container.style.backgroundImage="url('background/"+backgroundcount+".jpg')";
	
}
	
	
	function makeimage(){
		
		leftval=numto(1600);
		topval=numto(800);
		widval=4+numto(12);
		
		var z = document.createElement("IMG");
		z.src=picselect;
		z.style.position='absolute';


		z.style.left=leftval+'px';
		z.style.top=topval+'px';
		z.style.width=widval+'%';
		
			container.appendChild(z);
		//$(z).addClass(anim);
		//var newclass=makeclass();
			$(z).addClass(anim);

	}
	
	
	function numto(somenumber){
		
		var i=Math.floor((Math.random() * somenumber) + 1);
		return i;
	}
	
	
	
	function picanim(){
		
		
		
		
		
		
		
		
		var anrand=numto(animarray.length);
		//var anrand=1;
		anim=animarray[anrand-1];
			}
	
	
	
	
	
	
	function pickpic(){
		var picnum=numto(picarray.length);
		//var picnum=2;
		picselect="images/"+picarray[picnum-1]+".png";
		//picselect="images/cow.png";
	}
	
	
	
	
	function makeclass(){
		
		var classgen="up"+" "+"left";
		var classfull="animation:"	+classgen + " 6s forwards";
		return classfull;
		
		
		
		
	
	}
	
	
	
	
});