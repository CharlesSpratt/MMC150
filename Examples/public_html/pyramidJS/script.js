// JavaScript Document

//External JS document demonstrating the Pyramid Exercise. Remember to link to this document:
/*for (var line="#";	line.length<8;	line += "#"){
	document.getElementById("pyramid").innerHTML=line;
}*/

var theText="";
var line="#";
for(var i=0; i<8; i++){
	line.length<8;
	line+="#";
	theText+= line + "<br/>";
}

document.getElementById("pyramid").innerHTML=theText;