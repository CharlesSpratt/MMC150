// JavaScript Document
//Base Script to work from:
/*
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
*/

//New Script for output to document:
//Some additional Links that were reviewed:
//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/js/js_if_else.asp
var myOutput="";

for(var i=1; i<=100; i++){
	if(i % 3===0){
		myOutput+="Fizz ";
	}else if(i % 5===0){
		myOutput+="Buzz ";
	}
	
document.getElementById("buzzFizzOut").innerHTML=myOutput || i;
}

