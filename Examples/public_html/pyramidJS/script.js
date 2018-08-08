// JavaScript Document

//External JS document demonstrating the Pyramid Exercise. Remember to link to this document:
/*for (var line="#";	line.length<8;	line += "#"){
	document.getElementById("pyramid").innerHTML=line;
}*/

//Students are encouraged to also look at the following W3Schools URL: https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex
var theText="";
var line="#";

for(var i=0; i<8; i++){
	line.length<8;
	line+="#";
	theText+= line + "<br/>";
}

document.getElementById("pyramid").innerHTML=theText;