//variables
//canvas width
var w = 700;
//canvas height
var h = 500;	
//counter
var c = 0;
//array to hold x,y and offset of each node
var node = [];

//shape variables , these are all modified by the user
//width of ellipse
var a = 20;
//height of ellipse
var b = 110;
//speed of rotation
var speed = 100;
//distance between ellipses
var width = 200;
//number of corners on one side
var nodes = 4;

var canvas=document.getElementById("canvas");


//this is the actual width calculation
//lx,ly represents the middle of the left ellipse
var lx = (w/2)-width/2;
var ly = (h/2);
//rx,ry represents the middle of the right ellipse
var rx = (w/2)+width/2;
var ry = (h/2);
//current node number (used to check if node has changed)
var cn = nodes;

//set up canvas
suc();
//set up nodes
sunodes();
//animation loop
draw();

//set up canvas
function suc(){
	ctx=canvas.getContext("2d");
	//width and height are somewhat dynamic
	canvas.width=w;
	canvas.height=h;
	//centers the canvas
	canvas.style.top=((window.screen.height-h)/4)+"px";
};

//checks values of html sliders
function slidercheck(){
	
	//speed is reverse proportional so i made it more logical by subracting 101 from the slider (max value 100)
	speed=101-document.getElementById("speed").value;
	width=document.getElementById("width").value;
	b=document.getElementById("height").value;
	a=document.getElementById("perspective").value;
	//nodes is the most tricky since it requires redstributing offset value each time
	nodes=Number(document.getElementById("nodes").value);
	//only under the condition that nodes changed between this loop and the previous loop
	if(nodes!=cn){
	//run node setup to destribute offset variables for new node number
	sunodes();	
	//then set cn so it doesnt repeat
	cn=nodes;
	}
	
	
	//recalculate center of each ellipse
	lx = (w/2)-width/2;
	ly = (h/2);
	rx = (w/2)+width/2;
	ry = (h/2);
}

//set up nodes
function sunodes(){
	
	//reset node array
	node=[];
	//now make a number of node objects equal to nodes +1 (the plus one is for the last line between the first and last node)
	for(i=0;i<(nodes+1);i++){
		//assign each node an x, and a y
		node.push({
			x:0,
			y:0,
			//assign each node an offset value based on the cirumfrence of the ellipse
			//the cirumfrence seems to be 119.38 based on my trial and error testing
			o:(119.38/nodes)*i,
		})
	}
}

//animation loop
function draw(){
		if(window.innerWidth<window.innerHeight*1.33333){
		w=window.innerWidth*0.9;
		h=window.innerHeight*0.5;

	}else{
		w=window.innerWidth*0.3;
		h=window.innerHeight*0.5;
	}
				canvas.width=w;
	canvas.height=h;
	//clear the canvas
	ctx.clearRect(0,0,w,h);
	//check sliders
	slidercheck();
	
	//increment counter
	if(document.getElementById("speed").value>0){
	c++;
	};
	
	//begin drawing
	ctx.beginPath();
	//most of the stuff happens in this shape function
	shape();
	
	//now set color to white
	ctx.strokeStyle = "black";
	//and draw it all
	ctx.stroke();
	
	//check window size
	


	
	//loop
	requestAnimationFrame(draw);
}

//calculate an ellipse function 
//takes n (node number) x (center of ellipse) y (center of ellipse)
//c (counter variable) and an orientation (1 for left rotating and anything else for right)
function ellipse(n,x,y,c,orientation){
	
	//check orientation
	if(orientation==1){
	//set the x of the specified node based on this ellipse equation 
	//the equation turns the counter variable into an elipse through the cos method
	//while adding the offset of the specified node (this places the node that much further on the ellipse)
	//also speed is encorporated here through a division of the counter variable
	node[n].x=x-(a*Math.cos(node[n].o+c/speed));
	//same for y
	node[n].y=y+(b*Math.sin(node[n].o+c/speed));
	}else{
	//same for ellipse that spins the opposite direction (alternate "orientation")
	node[n].x=x-(-a*Math.cos(node[n].o+c/speed));
	node[n].y=y+(b*Math.sin(node[n].o+c/speed));	
	}
	
}


//this draws lines between nodes on the ellipse
function shape(){
	//for length of nodes +one
	for(i=0;i<nodes+1;i++){
	//so long as the first node has already been set
	if(node[i].x!=0){
	//then draw a line from the previous node to this one
	ctx.lineTo(node[i].x,node[i].y)
	};
	//then set the next node into place
	ellipse(i,lx,ly,c,1);
	}
	//now that the left side
	for(i=0;i<nodes+1;i++){
	ctx.lineTo(node[i].x,node[i].y)
	ellipse(i,rx,ry,c,2);
	}
	for(i=0;i<nodes+1;i++){
	ctx.moveTo(node[i].x,node[i].y)
	ellipse(i,lx,ly,c,1);
	ctx.lineTo(node[i].x,node[i].y)
	ellipse(i,rx,ry,c,2);
	}
}
