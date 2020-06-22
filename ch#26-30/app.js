// QUESTION # 01
var user = +prompt("Enter a positive integer.");
document.write("number: "+user+"<br>");
var rNumber = Math.round(user);
document.write("round of value: "+rNumber+"<br>");
var fValue = Math.floor(user);
document.write("floor value: "+fValue+"<br>");
var cValue = Math.ceil(user);
document.write("ceil value: "+cValue+"<br>");

// QUESTION # 02
var user = +prompt("Enter a negative integer.");
document.write("number: "+user+"<br>");
var rNumber = Math.round(user);
document.write("round of value: "+rNumber+"<br>");
var fValue = Math.floor(user);
document.write("floor value: "+fValue+"<br>");
var cValue = Math.ceil(user);
document.write("ceil value: "+cValue+"<br>");

// QUESTION # 03
var number =+prompt("Enter any number");
var  absolute=Math.abs(number);
document.write("The absolute value of "+number+" is "+absolute+"<br>" );

// QUESTION # 04
var dice=Math.random();
var improved=(dice*6)+1;
var round=Math.floor(improved);
document.write("random dice value: "+round+"<br>");

// QUESTION # 05

var coin=Math.random();
var improved=(coin*2)+1;
var round=Math.floor(improved);
if(round==2){
    document.write(round+"<br>");
    document.write("random coin value: Heads");
}
else{
    document.write(round+"<br>");
    document.write("random coin value: Tails"+"<br>");
}

// QUESTION # 06
var number=Math.random();
var random=(number*100)+1;
var round=Math.floor(random);
document.write("random number between 1 and 100: "+round+"<br>");

// QUESTION # 07

var user=prompt("Enter your weight in kilograms.");
var parse=parseFloat(user);
document.write("The weight of user is "+parse+" Kilograms."+"<br>");


// QUESTION # 08

var secret_no=Math.random();
var randomNumber1TO10=(secret_no*10)+1;
var round_sec= Math.round(random_no);
var user=+prompt("Enter a number between 1 to 10.");
if(user==round_sec){
    alert("Congratulations you make a right guess.");
}
else{
    alert("Try again!");
}