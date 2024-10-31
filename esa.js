var ads = document.getElementById("ad");
var notads = document.getElementById("na");
var about = document.getElementById("ab");

var cat = 'ab';
var menu = false;
var sc=false;
var lastfog;
var lastspan;
var lastdiv;

const adlist = 
[
['iatd','i am the devil'],
['bs','the body shop'],
['bq','burger quest'],
['bd','black & decker'],
['eb','ebay'],
['ho','honda'],
['ms','mountain sky'],
['tl','timeline'],
['yn','your niche']
]




document.body.addEventListener("click",newpage,false);


function newpage(e){
	
	if(e.target.id=="ad" || e.target.id=="mad"){
		cat = 'ad';
		geninfo(genadlist());
	}if(e.target.id=="na" || e.target.id=="mna"){
		cat = 'na'
		geninfo('<p>light paintings<br><br>no plan for revenge<br><br>401<br><br>3d shape gen<br><br>compression</p>');
	}if(e.target.id=="ab" || e.target.id=="mab"){
		cat = 'ab'
		geninfo("<p><img src='notads/stover.jpg'><br>evan stover is a settler living on the historical home-land of the lək̓ʷəŋiʔnəŋ  ( Lekwungen ) People and the general territory of the Coast Salish People . he has spent the past four years studying advertising at ontario's college of art and design ( ocad ) , where he was mentored by genius advertisers like Christine Scott and Pi'ikea Clark . under the supervision of the two afformentioned advertiser-professors , stover completed an 'undergrad thesis' called 'the world needs more advertising' . stovers thesis quickly snowballed into an international collaborative psudo concept agency called <a href='https://adandad.ca'> ad&ad </a> which aims to bring big budget advertising to no budget businesses . evan stover is a versatile , untested advertising oriented individual with considerable experience in design , programming , illustration and writing . if you don't believe me , view his work right here on this webpage . </p>")
	}
	
	if(e.target.id=="iatd"){
	genwork(e,"'i am the devil' is a commercial for a hot new mobile game . i wanted to make a commercial that would drive interest in both the game and the creator . <br><br>it was written & directed by evan stover , and edited by Jacob Sulli <br><br> it stars Jacob Sulli , Dose Omoruna & evan stover <br><br> total budget was $0","<video controls src='ads/iatd.mp4'>");
	}
	
	if(e.target.id=="bs"){
	genwork(e,"these advertisements represent the culmination of my research into the body shop's decline since its 2006 aquisition by l'oreal . it was an assignment given to me by my research professor ( and strategy genius ) Richard Fofana ; we were asked to pick a failing and controversial brand ( the body shop in my case ), research the controversy , create a relavent brief , and ideate a creative campaign . after conducting a survey and looking online , i made two key conclusions <br><br> 1 : customers are confused about the body shops ethicality <br><br> 2 : customers are confused about ethical brands / ethical shopping in general <br><br> my goal was clear : demystify ethical brands <br><br> with this insight , i conceptualized a campaign using tarot imagery to represent the 'mystical' world of ethics , along with sans serif text representing the 'demystified' truth about the body shop <br><br> in my opinion , the concept of this piece is really what shines . the visual execution is not phenomenal , but it could have been great if i had a team working with me","<img src=ads/bs1.png><img src=ads/bs2.png>");
	}
	
	if(e.target.id=="bq"){
	genwork(e,"in what world do stations play 90 second radio ads ? this was an assignment given to me by my storytelling professor Nick Goso , where i had to write and record a 90 second radio ad . the brief was asking us to tell the world that burger king's menu is 100% real , so i came up with a story to illustrate that fact . <br><br>  in my opinion : the script is solid but long , and the voice acting is pretty rough ( except the jester who was played by my friend and professional actor Zander Eke ) <br><br> it was written and edited by evan stover <br><br> and it stars Zander Eke as 'jester' , Jordan Wai as 'narrator' Frank Zhang as 'wizard' and evan stover as 'knight'","<audio controls><source src='ads/bq.mp3' type='audio/mpeg'></audio><br><br><b>SFX:</b> Medieval Lute<br><br><b>Narrator:</b> Once upon a time, the king had fallen ill to an unknown disease. A brave knight was summoned to venture on a quest for the cure.<b><br><br>SFX:</b> Trumpet noise<br><br><b>Wizard:</b> I call upon a quest! The only cure for your king is a full meal made with the most authentic and purest ingredients. Anything artificial will worsen his state.<br><br><b>Brave Knight:</b> I vow on my knighthood that I will procure such a meal.<br><br><b>Jester:</b> What a brave knight! Why, your bravery is quite a sight! hahaha (bells jingle as he moves around)<br><br><b>Brave Knight:</b> Thank you jester! I can sign my autograph if you would like.<br><br><b>Jester:</b> *Joker type laugh*<br><br><b>Wizard:</b> No time! make haste!<br><br><b>SFX:</b> Horse galloping noises slowly fading away<br><br><b>Narrator:</b> The knight ventured far to complete his quest, 300 days he traveled, without a moment's rest. He crossed oceans (crashing waves), mountains (Very windy), deserts (heat noise), rivers (water running), jungles (monkey noises), marshes (Squishy noises), caverns (echoes of footsteps) and valleys (valley sounds). To find the ingredients for a meal, twas not easy to find that which is 100% real.<br><br><b>Narrator:</b> Back in the kingdom, the court jester comes up with a plan<br><br><b>Jester:</b> Can I get 2 whoppers to-go please!<br><br><b>Employee:</b> Pull up to the next window on your left<br><br><b>Narrator:</b> One year later, the knight returns to the kingdom<br><br><b>Brave Knight:</b> (out of breath) I have returned with the cure! Praise me for I have traveled far-<br><br><b>Wizard:</b> It’s been eons since you left, someone else has cured the king.<br><br><b>Brave Knight:</b> But.. What about my que-<br><br><b>Jester:</b> My clever plan has made the king heal, if only you knew - Burger King's menu is 100% real! lalalala (jester noises)<br><br><b>Brave Knight (in defeat):</b> Hooray… <br><br><b>SFX:</b> Trumpet sounds <br><br><b>Narrator:</b> The quest for real has come to an end, come to your local Burger King, where realness is only one step away.")
	}
	
	if(e.target.id==""){
		
	}
	
	if(e.target.id!="me"){document.getElementById('me').src='menu.png';}
}

function fogmachine(){
	var fog = document.createElement('div');
		fog.classList.add('fog');
		document.querySelector(".content").appendChild(fog);
}

function genadlist(){
	var div='';
		for(i=0;i<adlist.length;i++){
		div += "<p class='op' id='"+adlist[i][0]+"'>"+adlist[i][1]+"</p><br>"
		}
		return div;
}

function genwork(e,statement,content){
	if(sc==true){
		geninfo("<div class='body3'><p>"+statement+"</p></div><div class='body2'><p id="+e.target.id+" class='op'>content</p><br><p class='fogged'>statement</p></div>");
		sc=!sc;
	}else{
		geninfo("<div class='body3'><p>"+content+"</p></div><div class='body2'><p class='fogged'>content</p><br><p id="+e.target.id+" class='op'>statement</p></div>");
		sc=!sc;
	}
	
		var div = document.createElement("div");
		for(i=0;i<adlist.length;i++){
		console.log(adlist[i]);
		if(adlist[i][0]==e.target.id){
		div.innerHTML += "<br><br>";
		}else{
		div.innerHTML += "<p class='op' id='"+adlist[i][0]+"'>"+adlist[i][1]+"</p><br>"
		}
		}
		div.style.position = 'absolute';
		div.classList.add('body');
		div.classList.add('mobh');
		document.querySelector(".content").appendChild(div);

	}
	
function geninfo(content){

		var fog = document.createElement('div');
		fog.classList.add('fog');
		document.querySelector(".content").appendChild(fog);
		
		var div = document.createElement("div");
		div.innerHTML = content;
		div.style.position = 'absolute';
		div.classList.add('body');
		document.querySelector(".content").appendChild(div);
		
		if(cat == 'ad'){
		
		document.getElementById('ad').removeAttribute('id');
		document.getElementById('na').removeAttribute('id');
		document.getElementById('ab').removeAttribute('id');
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad"><br></p><br><p id="na">not advertising</p><br><p id="ab">about</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		if(cat == 'ab'){
			
		document.getElementById('ad').removeAttribute('id');
		document.getElementById('na').removeAttribute('id');
		document.getElementById('ab').removeAttribute('id');
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p id="na">not advertising</p><br><p id="ab"><br></p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		if(cat == 'na'){
			
		document.getElementById('ad').removeAttribute('id');
		document.getElementById('na').removeAttribute('id');
		document.getElementById('ab').removeAttribute('id');
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p id="na"><br></p><br><p id="ab">about</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
	ads = document.getElementById("ad");
	notads = document.getElementById("na");
	about = document.getElementById("ab");
	mads = document.getElementById("mad");
	mnotads = document.getElementById("mna");
	mabout = document.getElementById("mab");
	
	ads.addEventListener("click",newpage,false);
    notads.addEventListener("click",newpage,false);
    about.addEventListener("click",newpage,false);

	
	lastfog=fog;
	lastdiv=div;
}

function menutog(){
	if(menu==false){
		
		var span = document.createElement("span");
		document.getElementById('me').src='back.png';
		span.innerHTML = "<img class='index' id='mad' src='advertising.png'><br><br><br><img class='index' id='mna' src='notadvertising.png'><br><br><br><img class='index' id='mab' src='about.png'><br><br>";
		span.classList.add("mobmenu");
		fogmachine();
		
		document.querySelector(".menubar").appendChild(span);
		
		var mads = document.getElementById("mad");
		var mnotads = document.getElementById("mna");
		var mabout = document.getElementById("mab");
		
		
		menu=true;
		lastspan = span;
	}else if(menu==true){
		
		document.getElementById('me').src='menu.png';
		geninfo("<p><img src='notads/stover.jpg'><br>evan stover is a settler living on the historical home-land of the lək̓ʷəŋiʔnəŋ  ( Lekwungen ) People and the general territory of the Coast Salish People . he has spent the past four years studying advertising at ontario's college of art and design ( ocad ) , where he was mentored by genius advertisers like Christine Scott and Pi'ikea Clark . under the supervision of the two afformentioned advertiser-professors , stover completed an 'undergrad thesis' called 'the world needs more advertising' . stovers thesis quickly snowballed into an international collaborative psudo concept agency called <a href='https://adandad.ca'> ad&ad </a> which aims to bring big budget advertising to no budget businesses . evan stover is a versatile , untested advertising oriented individual with considerable experience in design , programming , illustration and writing . if you don't believe me , view his work right here on this webpage . </p>")
		
		menu=false;
	}
}