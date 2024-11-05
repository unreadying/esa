var ads = document.getElementById("ad");
var notads = document.getElementById("na");
var about = document.getElementById("ab");

var cat = 'ab';
var menu = false;
var sc=false;
var lastfog;
var lastspan;
var lastdiv;
var newdiv;
var newscript = undefined;


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

const nadlist = 
[
['l','light'],
['npfr','no plan for revenge'],
['401','401'],
['3d','shape generator'],
['adc','analog digital'],
]


new Image().src='about.png';
new Image().src='advertising.png';
new Image().src='back.png';


document.body.addEventListener("mousedown",newpage,false);


function newpage(e){
	

	
	if(e.target.id=="ad" || e.target.id=="mad"){
		cat = 'ad';
		geninfo(1,genadlist());
	}if(e.target.id=="na" || e.target.id=="mna"){
		cat = 'na'
		geninfo(1,gennadlist());
	}if(e.target.id=="ab" || e.target.id=="mab"){
		cat = 'ab'
		geninfo(1,"<p><img src='notads/stover.jpg'><br>evan stover is a settler living on the historical home-land of the lək̓ʷəŋiʔnəŋ  ( Lekwungen ) People and the general territory of the Coast Salish People . he has spent the past four years studying advertising at ontario's college of art and design ( ocad ) , where he was mentored by genius advertisers like Christine Scott and Pi'ikea Clark . under the supervision of the two afformentioned advertiser-professors , stover completed an 'undergrad thesis' called 'the world needs more advertising' . stovers thesis quickly snowballed into an international collaborative psudo concept agency called <a href='https://adandad.ca'> ad&ad </a> which aims to bring big budget advertising to no budget businesses . evan stover is a versatile , untested advertising oriented individual with considerable experience in design , programming , illustration and writing . if you don't believe me , view his work right here on this webpage . </p>")
	}
	
	if(e.target.getAttribute('name')=="con" || e.target.getAttribute('name')=="sta" ){
		sc=!sc;
		console.log(e.target.id,"id=consta");
	}
	
	if(e.target.id=="iatd"){
	genwork(e,"'i am the devil' is a commercial for a hot new mobile game . i wanted to make a commercial that would drive interest in both the game and the creator . <br><br>it was written & directed by evan stover , and edited by Jacob Sulli <br><br> it stars Jacob Sulli , Dose Omoruna & evan stover <br><br> total budget was $0","<video controls src='ads/iatd.mp4'>");
	}
	
	if(e.target.id=="bs"){
	genwork(e,"these advertisements represent the culmination of my research into the body shop's decline since its 2006 aquisition by l'oreal . it was an assignment given to me by my research professor ( and strategy genius ) Richard Fofana ; we were asked to pick a failing and controversial brand ( the body shop in my case ), research the controversy , create a relavent brief , and ideate a creative campaign . after conducting a survey and looking online , i made two key conclusions <br><br> 1 : customers are confused about the body shops ethicality <br><br> 2 : customers are confused about ethical brands / ethical shopping in general <br><br> my goal was clear : demystify ethical brands <br><br> with this insight , i conceptualized a campaign using tarot imagery to represent the 'mystical' world of ethics , along with sans serif text representing the 'demystified' truth about the body shop <br><br> in my opinion , the concept of this piece is really what shines . the visual execution is not phenomenal , but it could have been great if i had a team working with me","<img src=ads/bs1.png><img src=ads/bs2.png>");
	}
	
	if(e.target.id=="bq"){
	genwork(e,"in what world do stations play 90 second radio ads ? this was an assignment given to me by my storytelling professor Nick Goso , where i had to write and record a 90 second radio ad . the brief was asking us to tell the world that burger king's menu is 100% real , so i came up with a story to illustrate that fact . <br><br>  in my opinion : the script is solid but long , and the voice acting is pretty rough ( except the jester who was played by my friend and professional actor Zander Eke ) <br><br> it was written and edited by evan stover <br><br> and it stars Zander Eke as 'jester' , Jordan Wai as 'narrator' , Frank Zhang as 'wizard' , and evan stover as 'knight'","<div class='script'><audio controls><source src='ads/bq.mp3' type='audio/mpeg'></audio><br><br><b>SFX:</b> Medieval Lute<br><br><b>Narrator:</b> Once upon a time, the king had fallen ill to an unknown disease. A brave knight was summoned to venture on a quest for the cure.<b><br><br>SFX:</b> Trumpet noise<br><br><b>Wizard:</b> I call upon a quest! The only cure for your king is a full meal made with the most authentic and purest ingredients. Anything artificial will worsen his state.<br><br><b>Brave Knight:</b> I vow on my knighthood that I will procure such a meal.<br><br><b>Jester:</b> What a brave knight! Why, your bravery is quite a sight! hahaha (bells jingle as he moves around)<br><br><b>Brave Knight:</b> Thank you jester! I can sign my autograph if you would like.<br><br><b>Jester:</b> *Joker type laugh*<br><br><b>Wizard:</b> No time! make haste!<br><br><b>SFX:</b> Horse galloping noises slowly fading away<br><br><b>Narrator:</b> The knight ventured far to complete his quest, 300 days he traveled, without a moment's rest. He crossed oceans (crashing waves), mountains (Very windy), deserts (heat noise), rivers (water running), jungles (monkey noises), marshes (Squishy noises), caverns (echoes of footsteps) and valleys (valley sounds). To find the ingredients for a meal, twas not easy to find that which is 100% real.<br><br><b>Narrator:</b> Back in the kingdom, the court jester comes up with a plan<br><br><b>Jester:</b> Can I get 2 whoppers to-go please!<br><br><b>Employee:</b> Pull up to the next window on your left<br><br><b>Narrator:</b> One year later, the knight returns to the kingdom<br><br><b>Brave Knight:</b> (out of breath) I have returned with the cure! Praise me for I have traveled far-<br><br><b>Wizard:</b> It’s been eons since you left, someone else has cured the king.<br><br><b>Brave Knight:</b> But.. What about my que-<br><br><b>Jester:</b> My clever plan has made the king heal, if only you knew - Burger King's menu is 100% real! lalalala (jester noises)<br><br><b>Brave Knight (in defeat):</b> Hooray… <br><br><b>SFX:</b> Trumpet sounds <br><br><b>Narrator:</b> The quest for real has come to an end, come to your local Burger King, where realness is only one step away.</div>")
	}
	
	if(e.target.id=="bd"){
	genwork(e,"if you havn't seen Micheal Bay's black & decker TV ads , id recomend clicking <a>here</a> or <a>here</a> to watch them .<br><br>my black & decker ads ( mockups ) are a direct continuation of that campaign .<br><br>in order to adapt the commercials to print , i distilled the Micheal Bay ads into three key moments<br><br>the trouble ( ex : falling out of a plane )<br><br>the solution ( ex : makeshift black & decker helicopter )<br><br>the escape ( ex : saftely driving away )<br><br>so i to keep the tone of the campaign , i decided to create still images with all three steps depicted at once . each mockup contains a story that needs to be unraveled by the viewer ; obviously a final version would have better visuals , idealy using photography .","<img src='ads/bd2.jpg'><br><br><p>if there's no way out ... make one </p><img src='ads/bd1.jpg'>");
	}
	
	if(e.target.id=="eb"){
	genwork(e,"ebay has a reputation for being full of scammers ; in truth they offer robust buyer protection .<br><br>the insight is simply that . ebay protects you . ","<img src='eb1.jpg'><img src='eb2.jpg'><img src='eb3.jpg'><img src='eb4.jpg'>")
	}
	
	if(e.target.id=="ho"){
	genwork(e,"this one is a full pitch deck , so im not sure how neccesary a statement is<br><br>for this project i collaborated with my friend Richard Singh , i did copy and he did the art .","<img src='ho1.jpg'><img src='ho2.jpg'><img src='ho3.jpg'><img src='ho4.jpg'>")
	}
	
	if(e.target.id=="ms"){
	genwork(e,"ebay has a reputation for being full of scammers ; in truth they offer robust buyer protection .<br><br>the insight is simply that . ebay protects you . ","<img src='ms1.jpg'><img src='ms2.jpg'><img src='ms3.jpg'>")
	}
	
	if(e.target.id=="tl"){
	genwork(e,"Anthony Kerr gave us this assignment : promote an app that brings the young and the elderly together","<img src='tl1.jpg'><img src='tl2.jpg'><img src='tl3.jpg'><img src='tl4.jpg'>")
	}
	
	if(e.target.id=="yn"){
	genwork(e,"Anthony Kerr gave us this assignment : create ads that bring people together","<img src='yn1.jpg'><img src='yn2.jpg'><img src='yn3.jpg'><img src='yn4.jpg'>")
	}
	

	
	if(e.target.id=="l"){
	genwork(e,"35mm film photos <br><br> taken by evan stover","<img src='notads/l1.jpg'><br><br><img src='notads/l2.jpg'>")
	}
	
	if(e.target.id=="npfr"){
	genwork(e,"a 10 minute screenplay , the pilot for a series called 'squareface man'",'<div class="script">NO PLAN FOR REVENGE<br>written by evan stover<br><br>EXT. BALCONY. SUNRISE.<br><br>MARC ESEE, a clean cut man around 30 years of age, is leafing through his daily planner.<br><br>marc slows his leafing to read the page labeled "friday november 17th"; "work" is the main task for the day.<br><br>marc flips quickly through saturday and sunday but pauses again to read "monday november 20th"; "work" is the main task on the itinerary for monday.<br><br>slowly marc flips the page to tuesday. it looks the exact same as friday and monday, except that "work" has been crossed out.<br><br>marc takes a sip of coffee and turns the page once more : "wendnesday november 22nd" "work" is crossed out again, and "find a new job" is the new task for the day<br><br>marc flips the page to "november 23rd" and picks up a pen. "work" is already crossed out so he writes beside it: "9 am first day of new job"<br><br>marcs pen hovers above the page.<br><br>marc adds quotations around the word "new".<br><br>marc hesitates above the page again.<br><br>finally marc closes the planner and returns inside.<br><br>marcs apartment is small but clean.<br><br>marc finishes his coffee and rinses out the mug, grabs his bag and heads out.<br><br>a calendar on the wall shows todays date : "november 23rd"</div>');
	}
	
	if(e.target.id=="401"){
	genwork(e,"four digital images mixed together , expressing a message about cars & roads<br><br>photoshopped by evan stover<br><br>photographed by evan stover with love from the warden ave hwy 401 overpass","<img src='notads/401.jpg'>")
	}
	
	if(e.target.id=="3d"){
	threedee(e,'3d');
	}
	
	if(e.target.id=="adc"){
	genwork(e,"i made this comic to demonstrate my understanding of analog vs digital . i barely got a passing grade","<img src='notads/ad1.jpg'><img src='notads/ad2.jpg'><img src='notads/ad3.jpg'><img src='notads/ad4.jpg'>");
	}
	
	if(e.target.id!="me"){document.getElementById('me').src='menu.png';}
}

function fogmachine(){
	var fog = document.createElement('div');
		fog.classList.add('fog');
		document.querySelector(".content").appendChild(fog);
		
	lastfog=fog;
}

function threedee(e,statement){
	
var html='<canvas id="canvas"></canvas><div class="controls"><p>speed <input class="slider" id = "speed" value = "1" max= "100" type = "range"></p><p>width <input class="slider" id = "width" value = "200" max = "400" type = "range"></p><p>height <input class="slider" id = "height" value = "110" max ="200" type = "range"></p><p>nodes <input class="slider" id = "nodes" value = "4" max = "18" type = "range"></p><p>perspective <input class="slider" id = "perspective" value = "20" max = "200" type = "range"></p></div>'


window.scrollTo(0,0);


	if(sc==true){
		geninfo(3,"<p>"+statement+"</p>");
		geninfo(2,"<p name='con' id='"+e.target.id+"' class='op'>content</p><br><p class='fogged'>statement</p>");
		
	}else{
		if(typeof(newscript)=='object'){
		document.head.removeChild(newscript);
		document.querySelector(".content").removeChild(newdiv);
		}
		var fog = document.createElement('div');
		fog.classList.add('fog');
		document.querySelector(".content").appendChild(fog);
		
		var div = document.createElement("div");
		div.innerHTML = html;
		//div.style.position = 'fixed';
		div.classList.add('body3');
		div.classList.add('high');
		document.querySelector(".content").appendChild(div);
		newdiv=div
		geninfo(2,"<p class='fogged'>content</p><br><p name='sta' id='"+e.target.id+"' class='op'>statement</p>");
		newscript = document.createElement('script');

		newscript.setAttribute('src','f.js');

		document.head.appendChild(newscript);
		console.log('newscript');
	
	}
	
		var div = document.createElement("div");
		for(i=0;i<nadlist.length;i++){
		if(nadlist[i][0]==e.target.id){
		div.innerHTML += "<br><br>";
		}else{
		div.innerHTML += "<p class='op' id='"+nadlist[i][0]+"'>"+nadlist[i][1]+"</p><br>"
		}
		

		div.classList.add('body');
		div.classList.add('mobh');
		document.querySelector(".content").appendChild(div);
	}

}

function genadlist(){
	var div='';
		for(i=0;i<adlist.length;i++){
		div += "<p class='op' id='"+adlist[i][0]+"'>"+adlist[i][1]+"</p><br>"
		}
		return div;
}

function gennadlist(){
	var div='';
		for(i=0;i<nadlist.length;i++){
		div += "<p class='op' id='"+nadlist[i][0]+"'>"+nadlist[i][1]+"</p><br>"
		}
		return div;
}

function genwork(e,statement,content){
	
	window.scrollTo(0,0);


	if(sc==true){
		geninfo(3,"<p>"+statement+"</p>");
		geninfo(2,"<p name='con' id='"+e.target.id+"' class='op'>content</p><br><p class='fogged'>statement</p>");
		
	}else{
		geninfo(3,"<p>"+content+"</p>");
		geninfo(2,"<p class='fogged'>content</p><br><p name='sta' id='"+e.target.id+"' class='op'>statement</p>");
	
	}
	
	
	if(cat=='ad'){
		var div = document.createElement("div");
		for(i=0;i<adlist.length;i++){
		if(adlist[i][0]==e.target.id){
		div.innerHTML += "<br><br>";
		}else{
		div.innerHTML += "<p class='op' id='"+adlist[i][0]+"'>"+adlist[i][1]+"</p><br>"
		}
		}
		//div.style.position = 'fixed';
		div.classList.add('body');
		div.classList.add('mobh');
		document.querySelector(".content").appendChild(div);
	}if(cat=='na'){
		var div = document.createElement("div");
		for(i=0;i<nadlist.length;i++){
		if(nadlist[i][0]==e.target.id){
		div.innerHTML += "<br><br>";
		}else{
		div.innerHTML += "<p class='op' id='"+nadlist[i][0]+"'>"+nadlist[i][1]+"</p><br>"
		}
		}
		//div.style.position = 'fixed';
		div.classList.add('body');
		div.classList.add('mobh');
		document.querySelector(".content").appendChild(div);
	}
	}
	
function geninfo(body,content){
	
		menu=false;
		
		if(body==1){
			body='';
		}
		
		if(body!=2){
		
		var fog = document.createElement('div');
		fog.classList.add('fog');
		document.querySelector(".content").appendChild(fog);
		}
		
		
		var div = document.createElement("div");
		div.innerHTML = content;
		//div.style.position = 'fixed';
		div.classList.add('body'+body+'');
		document.querySelector(".content").appendChild(div);
		
		if(body!=2){
		
		if(cat == 'ad'){
		
			if(document.getElementById('ad')!=null){
		document.getElementById('ad').removeAttribute('id');
			}
			if(document.getElementById('na')!=null){
		document.getElementById('na').removeAttribute('id');
			}
			if(document.getElementById('ab')!=null){
		document.getElementById('ab').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p><br></p><br><p id="na">not advertising</p><br><p id="ab">about</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		if(cat == 'ab'){
			
			if(document.getElementById('ad')!=null){
		document.getElementById('ad').removeAttribute('id');
			}
			if(document.getElementById('na')!=null){
		document.getElementById('na').removeAttribute('id');
			}
			if(document.getElementById('ab')!=null){
		document.getElementById('ab').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p id="na">not advertising</p><br><p><br></p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		if(cat == 'na'){
			if(document.getElementById('ad')!=null){
		document.getElementById('ad').removeAttribute('id');
			}
			if(document.getElementById('na')!=null){
		document.getElementById('na').removeAttribute('id');
			}
			if(document.getElementById('ab')!=null){
		document.getElementById('ab').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p><br></p><br><p id="ab">about</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		}

	
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
		if(lastfog==undefined){
		geninfo(1,"<p><img src='notads/stover.jpg'><br>evan stover is a settler living on the historical home-land of the lək̓ʷəŋiʔnəŋ  ( Lekwungen ) People and the general territory of the Coast Salish People . he has spent the past four years studying advertising at ontario's college of art and design ( ocad ) , where he was mentored by genius advertisers like Christine Scott and Pi'ikea Clark . under the supervision of the two afformentioned advertiser-professors , stover completed an 'undergrad thesis' called 'the world needs more advertising' . stovers thesis quickly snowballed into an international collaborative psudo concept agency called <a href='https://adandad.ca'> ad&ad </a> which aims to bring big budget advertising to no budget businesses . evan stover is a versatile , untested advertising oriented individual with considerable experience in design , programming , illustration and writing . if you don't believe me , view his work right here on this webpage . </p>")
		}else{
		lastfog.style.display = "none";
		lastspan.style.display = "none";
		}
		menu=false;
	}
}
