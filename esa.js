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
var fs = 1;
var oe = 3;
var foglevel = 'fogm';


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
['ss','sos'],
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
	}if(e.target.id=="ab" || e.target.id=="mab" || e.target.id=="esa"){
		cat = 'ab'
		geninfo(1,"<p><img src='notads/stover.jpg'><br>evan stover is a settler living on the historical home-land of the lək̓ʷəŋiʔnəŋ  ( Lekwungen ) People and the general territory of the Coast Salish People . he has spent the past four years studying advertising at ontario's college of art and design ( ocad ) , where he was mentored by genius advertisers like Christine Scott and Pi'ikea Clark . under the supervision of the two afformentioned advertiser-professors , stover completed an 'undergrad thesis' called 'the world needs more advertising' . stovers thesis quickly snowballed into an international collaborative psudo concept agency called <a href='https://adandad.ca'> ad&ad </a> which aims to bring big budget advertising to no budget businesses . evan stover is a versatile , untested advertising oriented individual with considerable experience in design , programming , illustration and writing . if you don't believe me , view his work right here on this webpage . <br><br><br><br><br><br></p>")
	}if(e.target.id=="se" || e.target.id=="mse"){
		
		cat = 'se'
		geninfo(1,"<p>font size<br><br><br><span id='small' class='small btn'>small</span><span id='medium' class='medium btn'>medium</span><span id='large' class='large btn'>large</span><br><br><br><br><br><br><br><br>onionskin effect<br><br><br><span id='off' class='off btn'>off</span><span id='low' class='low btn'>low</span><span id='mediumo' class='mediumo btn'>medium</span><span id='high' class='higho btn'>high</span></p>");
	setcheck(e);
	}
	
	if(e.target.getAttribute('name')=="con" || e.target.getAttribute('name')=="sta" ){
		sc=!sc;
		console.log(e.target.id,"id=consta");
	}
	
	if(e.target.id=="iatd"){
	genwork(e,"'i am the devil' is a commercial for a hot new mobile game . i wanted to make a commercial that would drive interest in both the game and the creator . <br><br>it was written & directed by evan stover , and edited by Jacob Sulli <br><br> it stars Jacob Sulli , Dose Omoruna & evan stover <br><br> total budget was $0","<video controls src='ads/iatd.mp4'>");
	}
	
	if(e.target.id=="bs"){
	genwork(e,"these advertisements represent the culmination of my research into the body shop's decline since its 2006 aquisition by l'oreal . it was an assignment given to me by my research professor ( and strategy genius ) Richard Fofana ; we were asked to pick a failing and controversial brand ( the body shop in my case ), research the controversy , create a relavent brief , and ideate a creative campaign . after conducting a survey and looking online , i made two key conclusions <br><br> 1 : customers are confused about the body shops ethicality <br><br> 2 : customers are confused about ethical brands / ethical shopping in general <br><br> my goal was clear : demystify ethical brands <br><br> with this insight , i conceptualized a campaign using tarot imagery to represent the 'mystical' world of ethics , along with sans serif text representing the 'demystified' truth about the body shop","<img src=ads/bs1.jpg><img src=ads/bs2.jpg><br><br><br><br><img src=ads/bs3.jpg><img src=ads/bs4.jpg>");
	}
	
	if(e.target.id=="bq"){
	genwork(e,"in what world do stations play 90 second radio ads ? this was an assignment given to me by my storytelling professor Nick Goso , where i had to write and record a 90 second radio ad . the brief was asking us to tell the world that burger king's menu is 100% real , so i came up with a story to illustrate that fact . <br><br>  in my opinion : the script is solid but long , and the voice acting is pretty rough ( except the jester who was played by my friend and professional actor Zander Eke ) <br><br> it was written and edited by evan stover <br><br> and it stars Zander Eke as 'jester' , Jordan Wai as 'narrator' , Frank Zhang as 'wizard' , and evan stover as 'knight'","<div class='script'><audio controls><source src='ads/bq.mp3' type='audio/mpeg'></audio><br><br><b>SFX:</b> Medieval Lute<br><br><b>Narrator:</b> Once upon a time, the king had fallen ill to an unknown disease. A brave knight was summoned to venture on a quest for the cure.<b><br><br>SFX:</b> Trumpet noise<br><br><b>Wizard:</b> I call upon a quest! The only cure for your king is a full meal made with the most authentic and purest ingredients. Anything artificial will worsen his state.<br><br><b>Brave Knight:</b> I vow on my knighthood that I will procure such a meal.<br><br><b>Jester:</b> What a brave knight! Why, your bravery is quite a sight! hahaha (bells jingle as he moves around)<br><br><b>Brave Knight:</b> Thank you jester! I can sign my autograph if you would like.<br><br><b>Jester:</b> *Joker type laugh*<br><br><b>Wizard:</b> No time! make haste!<br><br><b>SFX:</b> Horse galloping noises slowly fading away<br><br><b>Narrator:</b> The knight ventured far to complete his quest, 300 days he traveled, without a moment's rest. He crossed oceans (crashing waves), mountains (Very windy), deserts (heat noise), rivers (water running), jungles (monkey noises), marshes (Squishy noises), caverns (echoes of footsteps) and valleys (valley sounds). To find the ingredients for a meal, twas not easy to find that which is 100% real.<br><br><b>Narrator:</b> Back in the kingdom, the court jester comes up with a plan<br><br><b>Jester:</b> Can I get 2 whoppers to-go please!<br><br><b>Employee:</b> Pull up to the next window on your left<br><br><b>Narrator:</b> One year later, the knight returns to the kingdom<br><br><b>Brave Knight:</b> (out of breath) I have returned with the cure! Praise me for I have traveled far-<br><br><b>Wizard:</b> It’s been eons since you left, someone else has cured the king.<br><br><b>Brave Knight:</b> But.. What about my que-<br><br><b>Jester:</b> My clever plan has made the king heal, if only you knew - Burger King's menu is 100% real! lalalala (jester noises)<br><br><b>Brave Knight (in defeat):</b> Hooray… <br><br><b>SFX:</b> Trumpet sounds <br><br><b>Narrator:</b> The quest for real has come to an end, come to your local Burger King, where realness is only one step away.</div>")
	}
	
	if(e.target.id=="bd"){
	genwork(e,"if you havn't seen Micheal Bay's black & decker TV ads , id recomend clicking <a>here</a> or <a>here</a> to watch them .<br><br>my black & decker ads ( mockups ) are a direct continuation of that campaign .<br><br>in order to adapt the commercials to print , i distilled the Micheal Bay ads into three key moments<br><br>the trouble ( ex : falling out of a plane )<br><br>the solution ( ex : makeshift black & decker helicopter )<br><br>the escape ( ex : saftely driving away )<br><br>so i to keep the tone of the campaign , i decided to create still images with all three steps depicted at once . each mockup contains a story that needs to be unraveled by the viewer ; obviously a final version would have better visuals , idealy using photography .","<img src='ads/bd2.jpg'><br><br><p>if there's no way out ... make one </p><img src='ads/bd1.jpg'>");
	}
	
	if(e.target.id=="eb"){
	genwork(e,"here are a series of sketches i did for professor Pi'ikea Clark representing various storyboards in a campaign for ebay ; the tagline for this campaign being ' ebay keeps you safe ' . <br><br> after my initial research , i found that ebay has a reputation for being an untrustworthy marketplace ; this seemed at odds with both personal experience and ebay protection policy . i thus decided to make a campaign using comedic analogy to start a conversation about ebay's protection policy . ","<img src='ads/eb4.jpg'><br><br><img src='ads/eb2.jpg'><br><br><img src='ads/eb3.jpg'><br><br><img src='ads/eb1.jpg'>")
	}
	
	if(e.target.id=="ho"){
	genwork(e,"this one is a full pitch deck , so im not sure how neccesary a statement is<br><br>for this project i collaborated with my friend Richard Singh , i did copy and he did the art .","<img style='max-height:100vh' src='ads/ho1.jpg'><img style='max-height:100vh' src='ads/ho2.jpg'><img style='max-height:100vh' src='ads/ho3.jpg'><img style='max-height:100vh' src='ads/ho4.jpg'>")
	}
	
	if(e.target.id=="ms"){
	genwork(e,"these advertisements are for a ' river friendly ' soap company . the fact that not all soaps are river friendly made me think : what other products <i>should</i> be sustainable , yet aren't ? t shirts and ads . ","<img src='ads/ms1.jpg'><img src='ads/ms2.jpg'><img src='ads/ms3.jpg'>")
	}
	
	if(e.target.id=="tl"){
	genwork(e,"Anthony Kerr gave us this assignment : promote an app that brings the young and the elderly together","<img src='ads/tl1.jpg'><img src='ads/tl3.jpg'><img src='ads/tl4.jpg'><img src='ads/tl2.jpg'>")
	}
	
	if(e.target.id=="yn"){
	genwork(e,"Anthony Kerr gave us this assignment : create ads that bring people together","<img src='ads/yn1.jpg'><img src='ads/yn2.jpg'><img src='ads/yn3.jpg'><img src='ads/yn4.jpg'>")
	}
	

	
	if(e.target.id=="l"){
	genwork(e,"35mm film photos <br><br> taken by evan stover","<img src='notads/l1.jpg'><br><br><img src='notads/l2.jpg'>")
	}
	
	if(e.target.id=="npfr"){
	genwork(e,"a 10 minute screenplay , the pilot for a series called 'squareface man'","<div class='script'>NO PLAN FOR REVENGE<br>written by evan stover<br><br>EXT. BALCONY. SUNRISE.<br><br>MARC ESEE, a clean cut man around 30 years of age, is leafing through his daily planner.<br><br>marc slows his leafing to read the page labeled 'friday november 17th'; 'work' is the main task for the day.<br><br>marc flips quickly through saturday and sunday but pauses again to read 'monday november 20th'; 'work' is the main task on the itinerary for monday.<br><br>slowly marc flips the page to tuesday. it looks the exact same as friday and monday, except that 'work' has been crossed out.<br><br>marc takes a sip of coffee and turns the page once more : 'wendnesday november 22nd' 'work' is crossed out again, and 'find a new job' is the new task for the day<br><br>marc flips the page to 'november 23rd' and picks up a pen. 'work' is already crossed out so he writes beside it: '9 am first day of new job'<br><br>marcs pen hovers above the page.<br><br>marc adds quotations around the word 'new'.<br><br>marc hesitates above the page again.<br><br>finally marc closes the planner and returns inside.<br><br>marcs apartment is small but clean.<br><br>marc finishes his coffee and rinses out the mug, grabs his bag and heads out.<br><br>a calendar on the wall shows todays date : 'november 23rd' <br><br> INT. MARCS CAR. SUNRISE.<br><br>marc drives his hatchback silently through the city, he makes an expressionless face as he pulls into a parking spot.<br><br>marc exits the car and walks up to a building with a generic group of american homeless people out front. he looks intently at the group.<br><br>ASH, an elderly homeless man with ragged clothes and a ragged face steps towards marc<br><br>ASH<br><br>hey is that you marc?<br><br>marc looks blankly at ash<br><br>MARC<br><br>he- *ahem* hi ash.<br><br>ASH<br><br>hehehe - you lose your fancy job?<br><br>marc pauses for a second at the old mans perceptiveness<br><br>MARC<br><br>yeah<br><br>ASH<br><br>well go on in and get something to eat then, you'll be back on your feet in no time.<br><br>marc nods and heads towards the door, but stops and turns back towards ash<br><br>MARC<br><br>hey ash - i think you misunderstood, im working here again, so im not here for food<br><br>the group of homeless people (including ash) all chuckle at marcs retort. marc takes that as a sign to head inside.<br><br>INT. HOMELESS SHELTER.<br><br>a worker stands at a reception desk, a young man with a simple face, wearing business casual attire<br><br>WORKER<br><br>hello sir , how can i help you<br><br>MARC<br><br>oh hey . um my names marc i used to work here .<br><br>they stand in silence for a moment<br><br>MARC (CONT'D)<br><br>its my first day back<br><br>WORKER<br><br>oh<br><br>mark looks intently at worker<br><br>MARC<br><br>maybe i should talk to lance? do you know where he is?<br><br>WORKER<br><br>oh my boss is in his office , just up the stairs , if he is expecting you then go right on ahead<br><br>marc contemplates his life choices<br><br>INT. HOMELESS SHELTER. HALLWAY.<br><br>marc arrives at lances office , hesitates at the door<br><br>ORSON<br><br>alright im sure this will work well, with this arrangement things should stay unknown<br><br>marc presses closer to the door<br><br>ORSON (CONT'D)<br><br>and if a single person leaks the truth, im blaming it on you, so be very careful.<br><br>LANCE<br><br>we both have to be cautious, even a<br><br>marc enters room<br><br>INT. HOMELESS SHELTER. OFFICE.<br><br>LANCE, a large middle aged man sits at an ornate midcentury desk, ORSON, a scraggly middle aged man sits across the desk<br><br>LANCE<br><br>marc! kid! come on in!<br><br>MARC<br><br>hello lance hows it going<br><br>LANCE<br><br>its great, things are great, im just having a little pre event discussion with orson here. hes covering the thanksgiving feast tonight on public television.<br><br>ORSON<br><br>hey are you coming to the feast?<br><br>MARC<br><br>i didnt know there was an event tonight... sorry... its a bit last minute for me to be scheduling something<br><br>LANCE<br><br>come on marc , you should attend these things sometimes<br><br>MARC<br><br>how about next time, just let me know in advance<br><br>LANCE<br><br>heh - whatever . alright orson, see you tonight.<br><br>ORSON<br><br>yes best of luck to you , and nice to meet you marc :)<br><br>MARC<br><br>:|<br><br>orson exits<br><br>MARC (CONT'D)<br><br>so what should i do today?<br><br>LANCE<br><br>marc, marc! i havent seen you in years, whats the rush? here, we can have a drink<br><br>lance gestures to some bottles of liquor<br><br>marc looks skeptically at lance, then marc pulls out his daily planner<br><br>MARC<br><br>please just tell me what work needs done around here, should i be handling inventory, working in the kitchen, cleaning, working in the front?<br><br>LANCE<br><br>christ marc - when did you become so square?<br><br>they stare blankly at eachother for a moment<br><br>LANCE (CONT'D)<br><br>hmph. just go down to the kitchen, im sure they need some help<br><br>marc writes in his planner then looks back up at lance<br><br>MARC<br><br>alright and what time should i go on break?<br><br>lance puts his head in his hands<br><br>LANCE<br><br>just go<br><br>MARC<br><br>right now?<br><br>LANCE<br><br>YES!<br><br>CUT TO:<br><br>INT. KITCHEN.<br><br>marc is standing in the kitchen<br><br>there is no one around, and marc waits<br><br>the kitchen is messy<br><br>marc picks up a misplaced package of flour, and slowly walks over to the cupboards<br><br>in the first cupboard he opens marc notices a chemical bottle labeled 'CN- 'cyanide''<br><br>MARC<br><br>uhhhhhh<br><br>marc puts back the bottle and resumes looking for where to put the package of flour<br><br>marc accidentally reopens the cupboard with the chemical bottle, and stares at it<br><br>MARC (CONT'D)<br>(speaking loudly)<br><br>ummm hey? im just going to toss this chemical bottle, i dont really think this is food safe <br><br>there is no response<br><br>CUT TO:<br><br>INT. KITCHEN. LATER.<br><br>the kitchen is looking pretty clean<br><br>marc is dusting in the corner<br><br>lance enters<br><br>lance stops to admire how clean the kitchen is<br><br>LANCE<br><br>well look at that, no one told you what to do and still you found some work. i forgot the kitchen doesnt open until noon today.<br><br>marc steps back and looks around at his cleaning job<br><br>MARC<br><br>well now it'll be nice and clean for the feast tonight.<br><br>at the word 'feast' lance suddenly starts moving towards the cupboards.<br><br>lance begins looking through the cupboards.<br><br>LANCE<br><br>you know its a bit annoying that you reorganized the cupboards, how is anyone going to find anything in here now?<br><br>MARC<br><br>il be around to help if anything cant be found...<br><br>LANCE<br><br>hmph. well then , where did you put the chemical bottle that was in here? we need it for... pest control.<br><br>MARC<br><br>um... about that. well i just thought it was unsafe to store it with the food, so i got rid of it.<br><br>LANCE<br><br>... hey ... why dont you take that break now?<br><br>MARC<br><br>okay... good idea.<br><br>CUT TO:<br><br>EXT. BEHIND THE SHELTER. NOON.<br><br>marc is sitting in an alley with the group of homeless people from earlier<br><br>ASH<br><br>dont worry about it marc, i know your a good kid. im happy you are working here again<br><br>MARC<br><br>thanks ash, you know im happy to<br><br>see you again too.<br><br>ASH<br><br>uh oh, here comes lance. this guys got issues.<br><br>MARC<br><br>huh?<br><br>lance approaches the group with two well dressed men<br><br>LANCE<br><br>MARC! i know you just started but i think its time for a performance review.<br><br>marc stands and walks towards lance's group<br><br>MARC<br><br>what do you mean? i havent even<br><br>lance punches marc in the gut, marc clutches his chest and falls to the ground<br><br>LANCE<br><br>listen buddy, i really hate to do this, but youre a liability. i really didnt think you would be sodamn square.<br><br>marc tries to regain composure<br><br>MARC<br><br>what?<br><br>LANCE<br><br>that bottle you threw out. that was important. weve got a lot of pests in this place!<br><br>lance thrusts his leg forward, knocking marc to the ground. marc stays down but looks up at lance<br><br>MARC<br>(out of breath)<br><br>pests?<br><br>marc turns to look at the homeless group, then back up at lance<br><br>MARC (CONT'D)<br><br>you really are crazy!<br><br>lance kicks marc in the face<br><br>LANCE<br><br>im the only one crazy enough to clean up this city. clean it of these leeches!<br><br>lance glances towards to the group of homeless people, then turns back to marc<br><br>LANCE (CONT'D)<br><br>and im not going to let one punk like you stop me!<br><br>lance begins punching marc in the face, over and over again.<br><br>marcs vision begins to fade.<br><br>ASH<br><br>dont kill him!<br><br>a cacophony of noises erupts, glass breaking, screaming, punching, kicking, marc goes unconcious.<br><br>CUT TO BLACK.<br><br>INT. TENT. SUNSET.<br><br>marc slowly awakes, he tries to stand up<br><br>it seems he is in a tent<br><br>marc lays back down, he is bruised and injured and has two black eyes<br><br>ASH<br><br>you can leave if you want<br><br>MARC<br><br>..<br><br>ash is also bruised and has a black eye<br><br>MARC (CONT'D)<br><br>did you guys save me?<br><br>ASH<br><br>yeah... john and al are dead...<br><br>MARC<br><br>... lance ...<br><br>ASH<br><br>not just lance, the two guys he had with him also fought us, they were tough. im suprised we escaped.<br><br>the two men sit in silence for a long moment. tears begin to stream down marcs face. they remain silent.<br><br>marc closes his eyes, then opens them with a grim expression<br><br>marc gets up to leave. his planner falls out of his pocket open to november 23rd. 'work' is crossed out, '9 am first day of 'new' job' is written, followed by '9:30 work in kitchen'.<br><br>marc opens the tent<br><br>ASH (CONT'D)<br><br>so what now?<br><br>MARC<br><br>fuck it<br><br>marc walks out to the street. the sun is setting and traffic is bumper to bumper. marc stares out at the cars.<br><br>marc picks a fancy 90's sports car out of the crowd and heads straight for it<br><br>he knocks on the window of the fancy car stuck in traffic<br><br>orson, the scrawny reporter is seated inside and rolls down the window for marc<br><br>ORSON<br><br>oh hey! marc, right?<br><br>marc reaches through the open window and opens the driver side door, then he grabs the back of orsons head and slams it forcefully into the steering wheel.<br><br>the impact triggers the car horn, which inspires the rest of the cars in traffic to begin honking.<br><br>marc looks orson in the eyes<br><br>MARC<br><br>what the hell is lance planning, you twisted bastard<br><br>orson reaches over to the glove compartment<br><br>ORSON<br><br>marc, come on, i dont know what you mean, are- are you headed to the thanksgiving feast?<br><br>orson removes a hand gun from the glove box<br><br>marc dives into the car, tackling orson<br><br>a gunshot rings out<br><br>honking continues<br><br>marc and orson scuffle for a moment, then marc emerges with the gun pointed at orsons forehead<br><br>ORSON (CONT'D)<br><br>alright dont please dont shoot dont shoot, lance had poison, hes poisoning the- the he wants to kill homeless people, someone found the p-poison and then well lance said he said he is going to blow up the whole shelter i mean he well he tells me itsss for the- for the best for the city- i mean - i really mean i dont - believe him but he<br><br>marc grabs orson by the collar and drags him out of the car,<br><br>throwing orson to the curb.<br><br>marc gets into the orsons car and peels away from traffic, driving on the sidewalk to avoid crashing.<br><br>marc races through the city, his face tight and furrowed<br><br>marc pulls up in front of the shelter, a big sign reads 'thanksgiving feast'<br><br>there is a giant crowd in front of the shelter<br><br>marc quickly rifles through the glove box, he finds a gun<br><br>holster, some cigarettes, a lighter and a pair of sunglasses<br><br>CUT TO:<br><br>INT. SHELTER. EVENING.<br><br>probably a hundred homeless people are all crammed inside the shelter foyer, yet the room is nearly silent<br><br>a bruised man with sunglasses and a gun on his hip enters the shelter smoking a cigarette<br><br>MARC<br><br>everyone get the fuck out!<br><br>marc pulls out the pistol and shoots it once into the ceiling<br><br>the whole room erupts into chaos as marc marches forward<br><br>a panel falls from the ceiling where marc shot<br><br>people start to filter out of the shelter<br><br>worker stays at the reception area, and slowly pulls out a shotgun from underneath the desk<br><br>worker points the gun at mark<br><br>WORKER<br><br>m-<br><br>marc shoots worker in head, killing him instantly <br><br>marc takes a hit off his cigarette and sets up the stairs to lances office<br><br>marc reaches the door and kicks it off its hinges<br><br>inside the room is lance and two well dressed men, all three have guns pointed at marc<br><br>marc looks in the corner of the room, towards two metal tanks, both with an explosive warning on the side<br><br>LANCE<br><br>you freak! what the f-<br><br>marc shoots a metal tank, and the whole room erupts into an explosive flame<br><br>THE END</div>");
	}
	
	if(e.target.id=="401"){
	genwork(e,"four digital images mixed together , expressing a message about cars & roads<br><br>photoshopped by evan stover<br><br>photographed by evan stover with love from the warden ave hwy 401 overpass","<a target='_blank' href ='notads/401.jpg'><img src='notads/401.jpg'></a>")
	}
	
	if(e.target.id=="3d"){
	threedee(e,'this program is my attempt to make a 3d shape generator using a 2d space with javascript . its definetly not perfect , but it can still create intertesting animations and shapes .');
	}
	
	if(e.target.id=="ss"){
	genwork(e,"a reduction block print i made , based off of a 35mm film photo <br><br> 10 x 12 inch oil print on japanese kozo paper","<img src='notads/ss2.jpg'><br><br><img src='notads/ss1.jpg'>");
	}
	

	
	
	
	if(e.target.id=="small" || e.target.id=="medium" || e.target.id=="large" || e.target.id=="low" || e.target.id=="mediumo" || e.target.id=="high" || e.target.id=="off"){
		setcheck(e);
	}
	
	if(e.target.id!="me"){document.getElementById('me').src='menu.png';}
}

function setcheck(e){

		if(e.target.id=="small" || fs==1){
			document.getElementById('small').style.opacity='0.2'
			document.body.style.fontSize='1.7vh'
			document.body.style.lineHeight='2.3vh'
			fs=1
		}
		if(e.target.id=="medium" || fs==2){
			document.getElementById('medium').style.opacity='0.2'
			document.body.style.fontSize='2.2vh'
			document.body.style.lineHeight='3vh'
			fs=2;
		}
		if(e.target.id=="large" || fs==3){
			document.getElementById('large').style.opacity='0.2'
			document.body.style.fontSize='3vh'
			document.body.style.lineHeight='4vh'
			fs=3;
		}
		if(fs!==1){
		document.getElementById('small').style.opacity='1';
		}if(fs!==2){
		document.getElementById('medium').style.opacity='1';
		}if(fs!==3){
		document.getElementById('large').style.opacity='1';
		}
	
		if(e.target.id=="low" || oe==2){
			document.getElementById('low').style.opacity='0.2'
			oe=2;
			foglevel = 'fogl';
			lastfog.classList.remove(lastfog.classList);
			lastfog.classList.add(foglevel);
		}
		if(e.target.id=="mediumo" || oe==3){
			document.getElementById('mediumo').style.opacity='0.2'
			oe=3;
			foglevel = 'fogm';
			lastfog.classList.remove(lastfog.classList);
			lastfog.classList.add(foglevel);
		}
		if(e.target.id=="high" || oe==4){
			document.getElementById('high').style.opacity='0.2'
			oe=4;
			foglevel = 'fogh';
			lastfog.classList.remove(lastfog.classList);
			lastfog.classList.add(foglevel);
		}
		if(e.target.id=="off" || oe==1){
			document.getElementById('off').style.opacity='0.2'
			oe=1;
			foglevel = 'fogo';
			lastfog.classList.remove(lastfog.classList);
			lastfog.classList.add(foglevel);
		}
		if(oe!==1){
		document.getElementById('off').style.opacity='1';
		}if(oe!==2){
		document.getElementById('low').style.opacity='1';
		}if(oe!==3){
		document.getElementById('mediumo').style.opacity='1';
		}if(oe!==4){
		document.getElementById('high').style.opacity='1';
		}
	
}

function fogmachine(){
	var fog = document.createElement('div');
		fog.classList.add(foglevel);
		document.querySelector(".content").appendChild(fog);
		
	lastfog=fog;
}

function threedee(e,statement){
	
			var fog = document.createElement('div');
		fog.classList.add(foglevel);
		document.querySelector(".content").appendChild(fog);
	
var html='<canvas id="canvas"></canvas><div class="controls"><p>speed <input class="slider" id = "speed" value = "1" max= "100" type = "range"></p><p>width <input class="slider" id = "width" value = "200" max = "400" type = "range"></p><p>height <input class="slider" id = "height" value = "110" max ="200" type = "range"></p><p>nodes <input class="slider" id = "nodes" value = "4" max = "18" type = "range"></p><p>perspective <input class="slider" id = "perspective" value = "20" max = "200" type = "range"></p></div>'


window.scrollTo(0,0);


	if(sc==true){
		geninfo(3,"<p>"+statement+"</p>");
		geninfo(2,"<p name='con' id='"+e.target.id+"' class='op'>content</p><br><p class='fogged'>statement</p>");
		
	}else{
		if(typeof(newscript)=='object' && typeof(newdiv)=='object'){
		document.head.removeChild(newscript);
		document.querySelector(".content").removeChild(newdiv);
		}
		var div = document.createElement("div");
		div.innerHTML = html;
		div.classList.add('body3');
		div.classList.add('high');
		document.querySelector(".content").appendChild(div);
		newdiv=div
		var div4 = document.createElement("div");
		div4.innerHTML = "<p class='fogged'>content</p><br><p name='sta' id='"+e.target.id+"' class='op'>statement</p>";
		div4.classList.add("body2");
		document.querySelector(".content").appendChild(div4);
	}
	
		
		var div2 = document.createElement("div");
		div2.innerHTML = '<p id="ad">advertising</p><br><p><br></p><br><p id="ab">about</p><br><p id="se">settings</p>';
		div2.classList.add("menu");
		document.querySelector(".content").appendChild(div2);
		

		

		
		
			if(document.getElementById('ad')!=null){
		document.getElementById('ad').removeAttribute('id');
			}
			if(document.getElementById('na')!=null){
		document.getElementById('na').removeAttribute('id');
			}
			if(document.getElementById('ab')!=null){
		document.getElementById('ab').removeAttribute('id');
			}
			if(document.getElementById('se')!=null){
		document.getElementById('se').removeAttribute('id');
			}

		newscript = document.createElement('script');
		newscript.setAttribute('src','f.js');
		document.head.appendChild(newscript);
		console.log('newscript');
	
	
	
		var div3 = document.createElement("div");
		for(i=0;i<nadlist.length;i++){
		if(nadlist[i][0]==e.target.id){
		div3.innerHTML += "<br><br>";
		}else{
		div3.innerHTML += "<p class='op' id='"+nadlist[i][0]+"'>"+nadlist[i][1]+"</p><br>"
		}
		div3.classList.add('body');
		div3.classList.add('mobh');
		document.querySelector(".content").appendChild(div3);
		
		
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
		fog.classList.add(foglevel);
		document.querySelector(".content").appendChild(fog);
		}
		
		

		
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
			if(document.getElementById('se')!=null){
		document.getElementById('se').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p><br></p><br><p id="na">not advertising</p><br><p id="ab">about</p><br><p id="se">settings</p>';
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
			if(document.getElementById('se')!=null){
		document.getElementById('se').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p id="na">not advertising</p><br><p><br></p><br><p id="se">settings</p>';
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
			if(document.getElementById('se')!=null){
		document.getElementById('se').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p><br></p><br><p id="ab">about</p><br><p id="se">settings</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		
		if(cat == 'se'){
			if(document.getElementById('ad')!=null){
		document.getElementById('ad').removeAttribute('id');
			}
			if(document.getElementById('na')!=null){
		document.getElementById('na').removeAttribute('id');
			}
			if(document.getElementById('ab')!=null){
		document.getElementById('ab').removeAttribute('id');
			}
			if(document.getElementById('se')!=null){
		document.getElementById('se').removeAttribute('id');
			}
			
			if(document.getElementById('small')!=null){
		document.getElementById('small').removeAttribute('id');
			}
			if(document.getElementById('medium')!=null){
		document.getElementById('medium').removeAttribute('id');
			}
			if(document.getElementById('large')!=null){
		document.getElementById('large').removeAttribute('id');
			}
			if(document.getElementById('off')!=null){
		document.getElementById('off').removeAttribute('id');
			}
			if(document.getElementById('low')!=null){
		document.getElementById('low').removeAttribute('id');
			}
			if(document.getElementById('mediumo')!=null){
		document.getElementById('mediumo').removeAttribute('id');
			}
			if(document.getElementById('high')!=null){
		document.getElementById('high').removeAttribute('id');
			}
		
		var div = document.createElement("div");
		div.innerHTML = '<p id="ad">advertising</p><br><p id="na">not advertising<br></p><br><p id="ab">about</p>';
		div.classList.add("menu");
		document.querySelector(".content").appendChild(div);
		
		}
		}
				var div = document.createElement("div");
		div.innerHTML = content;
		//div.style.position = 'fixed';
		div.classList.add('body'+body+'');
		document.querySelector(".content").appendChild(div);
	
		

	
	lastfog=fog;
	lastdiv=div;
}

function menutog(){
	if(menu==false){
		
		var span = document.createElement("span");
		document.getElementById('me').src='back.png';
		span.innerHTML = "<img class='index' id='mad' src='advertising.png'><br><br><br><img class='index' id='mna' src='notadvertising.png'><br><br><br><img class='index' id='mab' src='about.png'><br><br><img class='index' id='se' src='settings.png'>";
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
