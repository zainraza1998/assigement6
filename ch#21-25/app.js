// ques # 01
var Name1=prompt("Enter First name ");
var Name2=prompt("Enter Last name ");
var Name=Name2+Name2;
document.write("hello " +Name+"<br>");
// ques # 02
var fav_Phone =prompt("Write name of your favourite mobile phone modal ");
document.write("My favourite phone is: "+fav_Phone+"<br>");
document.write("Length of string: "+fav_Phone.length+"<br>");
// ques # 03
var b="Pakistani";
document.write("String: "+b+"<br>");
var i= b.indexOf("n");
document.write("Index of 'n' : " +i+"<br>");
// ques # 04
var c="Hello World";
document.write("String: "+c+"<br>");
var h=c.lastIndexOf("l");
document.write("Last index of 'l': "+h+"<br>");
// ques # 05
var a="Pakistani";
document.write("String: "+a+"<br>");
var m=a.charAt(3);
document.write("Character at index 3: "+m+"<br>");
// ques # 06
var Name1=prompt("Enter First name ");
var Name2=prompt("Enter Last name ");
var Name=Name1.concat(Name2);
document.write("hello " +Name+"<br>");
// ques # 07
var city = "Hyderabad";
document.write("City: " + city+"<br>");
for (var i = 0; i < city.length; i++) {
    if (city.slice(i, i + 5) === "Hyder") {
        city = city.slice(0, i) + "Islam" + city.slice(i + 5);
    }
}
document.write("After replacement: " + city + "<br>");
// ques # 08
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br>");
var replac=message.replace(/and/g,"&");
document.write(replac+"<br>");
// ques # 09
 var integerString = "472"
 document.write("Value:"+integerString+"<br>");
document.write("Type: "+typeof integerString+"<br>");
 var num = Number(integerString);
 document.write("Value: "+num+"<br>");
 document.write("Type: "+typeof num+"<br>");

// ques # 10
var user=prompt("write any word");
document.write("User input: "+user+"<br>");
var capitaluser=user.toUpperCase();
document.write("Upper case: "+capitaluser+"<br>")

// ques # 11
var user=prompt("write any word");
document.write("User input: "+user+"<br>");
var char1 = user.slice(0,1);
char1 = char1.toUpperCase();
var char2 = user.slice(1);
otherchar = char2.toLowerCase();
var Name=char1.concat(char2);
document.write("Title case: "+Name+"<br>");

// ques # 12
 var num="3.142";
 document.write("Number: "+num+"<br>");
  var num = num.toString();
 var start = num.slice(0,1);
 var end = num.slice(2,5);
 var Num=start.concat(end);
 document.write("Result: "+Num+"<br>");

// ques # 13
var userName = prompt("Enter your name");
if(userName.match(/@/gi) || userName.match(/,/gi) || userName.match(/!/gi) || userName.match(/./gi) ){
    alert("Please enter a valid username.");
}
else{
    alert("User name is: "+userName);
}

// ques # 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=prompt("Welcome to ABC Bakery, What do you want to order sir/,ma'am?");
search = search.toLowerCase();
var bakeryItems= arr.indexOf(search);
if(arr.indexOf(search) != -1){
    document.write(search + " is available at index "+bakeryItems+" in our bakery"+"<br>");
}
else{
    document.write(search + " is not available  in our bakery"+"<br>")
}

// ques # 15

var userpassWord = prompt("Enter your password");
function passWord(word) 
    {
        var a = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        var answer = a.test(word);
        if (answer === true) {
            alert("It is a valid password");
        }
        else {
            alert("Please enter a valid password");
        }
    }
    passWord(userpassWord);



// ques # 16

var university = "University of Karachi";
var ar = university.split(''); 
for(var i=0;i<ar.length;i++){
document.write(ar[i]+"<br>");
}

// ques # 17
var user=prompt("Enter your country name.");
document.write("User input: "+user+"<br>");
var lastChar=user.slice(-1);
document.write("Last character of input: "+lastChar+"<br>");


// ques # 18
function occurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="The quick brown fox jumps over the lazy dog"; 
 document.write("Text: "+text+"<br>");
 text=text.toLowerCase();
 var count=occurences(text,"the");
 document.write("There are "+count+" occurence(s) of the word 'the'"+"<br>");