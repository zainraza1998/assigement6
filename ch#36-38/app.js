// QUESTION # 01
function Time() {
    var today = new Date();
    document.write(today + "<br>")
}
Time();

// QUESTION # 02
function greeted(firstName, lastName) {

    firstName = prompt("Enter first name");
    lastName = prompt("Enter last name");
    var greeting = firstName + lastName;
    document.write("Hello " + greeting + "<br>");
}
greeted();
// QUESTION # 03

function add(a, b) {

    var c = a + b;
    return c;
}
a = +prompt("Enter first number");
b = +prompt("Enter second number");
var d = add(a, b);
document.write("addition: " + d + "<br>");

// QUESTION # 04

function calculate(num1, operator, num2) {
    if (operator == '+') {
        var c = (num1 + num2);
    }
    else if (operator == '-') {
        var c = (num1 - num2);
    }
    else if (operator == '*') {
        var c = (num1 * num2);
    }
    else if (operator == '/') {
        var c = (num1 / num2);
    }
    return c;
}
num1 = +prompt("Enter first number");
operator = prompt("Enter operator")
num2 = +prompt("Enter second number");
var d = calculate(num1, operator, num2);
document.write("The answer of your calculation is: " + d + "<br>");

// QUESTION # 05

function square(n) {
    return n * n;
}
n = +prompt("Enter any number to get its square");
var squ = square(n);
document.write("The square of " + n + " is: " + squ + "<br>");

// QUESTION # 06

function factorial(num) {
    var result = 1;
    if (num == 0 || num == 1) {
        return result;
    }
    else {
        for (var i = num; i >= 1; i--) {
            result = result * i;
        }
        return result;
    }
}
n = +prompt("Enter any number to get its factorial.");
result = factorial(n);
document.write("The factorial of " + n + " is " + result + "<br>");


// QUESTION # 07

function counting(start, stop) {
    for (var i = start; i < stop; i++) {
        document.write(i + "<br>");
    }
    return i;
}
start = +prompt("Enter starting value");
stop = +prompt("Enter ending value");
var c = counting(start, stop);
document.write( c + "<br>");

// QUESTION # 08

function calculateHypotenuse(Base, Perpendicular) {
    function calculatesquare(n) {
        return n * n;
    }
    return Math.sqrt(calculatesquare(Base) + calculatesquare(Perpendicular));
}
var Base = +prompt("Enter base value.");
var Perpendicular = +prompt("Enter perpendicular value");
var d = calculateHypotenuse(Base, Perpendicular);
alert("Hypotenous of right angle triangle is: " + d + "\n");


// QUESTION # 09

function calArea(width, height) {
    var a = width * height
    return a;
}
var l = calArea(3, 4);
document.write("Area of rectangle using values: " + l + "<br>")
var width = +prompt("Enter width");
var height = +prompt("Enter height");
var g = calArea(width, height);
document.write("Area of reactangle  using variables: " + g + "<br>")

// QUESTION # 10

function check_Palindrome(test) {
    var str = test.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var count = 0;
    if (str === "") {
        console.log("Nothing found!");
        return false;
    }
    if ((str.length) % 2 === 0) {
        ccount = (str.length) / 2;
    } else {
        if (str.length === 1) {
            console.log("It is a palindrome word.");
            return true;
        } else {
            count = (str.length - 1) / 2;
        }
    }
    for (var x = 0; x < count; x++) {
        if (str[x] != str.slice(-1 - x)[0]) {
            console.log("It is not a palindrome word.");
            return false;
        }
    }
    console.log("It is a palindrome word.");
    return true;
}
test = prompt("Enter a word to check it is a palindrome word or not.")
check_Palindrome(test);

// QUESTION # 11

function upperCase(string) {
    var arr = string.split(' ');
    var newarray = [];

    for (var x = 0; x < arr.length; x++) {
        newarray.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
    }
    return newarray.join(' ');
}
var f = prompt("Enter Example string");
document.write("Expected string: " + upperCase(f) + "<br>");


// QUESTION # 12

function longestWord(str) {
    var arry = str.match(/\w[a-z]{0,}/gi);
    var result = arry[0];

    for (var x = 1; x < arry.length; x++) {
        if (result.length < arry[x].length) {
            result = arry[x];
        }
    }
    return result;
}
var g = prompt("Enter any string to get its longest word");
document.write("Longest word is: " + longestWord(g) + "<br>");

// QUESTION # 13

function specified(string, letter) {
    var letterCheck = 0;
    for (var place = 0; place < string.length; place++) {
        if (string.charAt(place) == letter) {
            letterCheck += 1;
        }
    }
    return letterCheck;
}
var string = prompt("Enter any string.");
var letter = prompt("write any one letter");
document.write("Specfied character is: " + specified(string, letter) + "<br>");

// QUESTION # 14
// CALCULATE CIRCUMFERENCE OF CIRCLE
function Circumference(radius) {
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    return circumference
}
var radius = +prompt("Enter radius");
document.write("The circumference of circle is: " + Circumference(radius) + "<br>");

// CALCULATE AREA OF CIRCLR
function cArea(radius) {
    var pi = 3.142;
    var circumference = pi * radius * radius;
    return circumference
}
var radius = +prompt("Enter radius");
document.write("The Area of circle is: " + cArea(radius) + "<br>");