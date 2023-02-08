
document.write("<h3>Quastion No 1</he>")

var city = prompt("Enter Your City Name");
if (city==="Karachi")
alert ("Welcome to city of lights!")

document.write("<h3>Quastion No 2</he>")

var gender = prompt("gender");
if (gender==="Mail"){
    alert ("Good Morning Sir.")
}
else {
    alert ("Good Morning Maam.")
}
document.write("<h3>Quastion No 3</he>")

 var signal = prompt("Color Of Trafic Signal")
 if (signal == "red"){
    alert ("Must Stop")
 }
 else if (signal == "Yellow"){
    alert ("Ready to move")
 }
 else if (signal == "green"){
    alert ("Move now")
 }

 document.write("<h3>Quastion No 4</he>")

 var fuel = prompt("Remaining fuel left")
 if (fuel <= 0.25){
    alert("Please refill the fuel in your car")
 

 document.write("<h3>Quastion No 5</he>")

 var a = 4;
 if (++a === 5){
   alert ("given condition for varibale a is true")
 }
 var b = 82;
 if (++b === 83){
   alert("given condition for veribale b is true")
 }
var c = 12;
if (++c === 13){
   alert("condition 1 is true")
}
if (c === 13){
   alert ("condition 2 is true")
}
if (++c === 14){
   alert ("condition 3 is true")
}
if (c === 14){
   alert ("condition 4 is true")
}
var materialcost = 20000;
var laborcost = 2000;
var totalcost = materialcost + laborcost;
if (totalcost === laborcost + materialcost){
alert ("The codt equals")
} 
if (true){
alert ("true")
}
if ("false") {
   alert ("False");
}
if ("car is smaller than cat"){

}

document.write("<h3>Quastion No 6</he>")
document.write("<br>")
var marks;
var total;
var percent;
total = prompt("Enter Total Marks")
marks = prompt("Enter Obtained Marks")
document.write("Total Marks : " + total)
document.write("<br>")
document.write("Marks Obtain : " + marks)
document.write("<br>")
percent = (marks * 100) / total;
document.write("Percentage : " + percentage + "%")
document.write("<br>")
if(percentage >=80){
   document.write("Grade : A One")
   document.write("<br>")
   document.write("Remarks : Excellent")
}
else if (percent >= 70){
   document.write("Grade : A")
   document.write("<br>")
   document.write("Remarks : Good")
}
else if (percent >= 60){
   document.write("Grade : B")
   document.write("<br>")
   document.write("Remarks : You Need To Improve")
}
else {
   document.write ("Grade : Fail")
   document.write("<br>")
   document.write("Remarks : Sorry")
}

document.write("<h3>Quastion No 7</h3>")

var guess;
guess = prompt("Enter a Number \nRanging from 1 to 10")
if (guess == 8){
alert("Bingo! You Guessed the Right Number")
}
else if (guess == 7){
   alert ("Close Enough to the Correct Answer")
}
else{
   alert ("Not Even Close")
}
document.write("<h3>Quastion No 8</h3>")

var three;
three = prompt("Enter Any Number" , "3")
if (three % 3== 0){
   alert ("Nember is Divisible by 3")
}
else{ 
    ("Number is Note divisible by 3")
    }

document.write("<h3>Quastion No 9</he>")
var even;
even = prompt("Enter Any Number")
if (even % 2 == 0){
   alert ("Given Number is Even")
}
else {
//    alert ("Given Number is odd")

document.write("<h3>Quastion No 10</h3>")
var temp;
temp = prompt("Enter Today is Temperature")
if (temp > 40){
   alert("It is too hot outside")
}
else if (temp > 30){
   alert ("The Weather Today is Normal")
}
else if (temp > 20){
   alert ("Today's Weather is Cool")
}
else if (temp > 10){
   alert ("OMG! Today's Weather is so Cool")
}
else if (temp > 0){
   alert ("freezing outside")
}
else {
   alert ("Value Enter karni hoti hai")
}


document.write("<h3>Question No 2</h3>")
var value1;
var value2;
value1 = prompt ("Enter Number 1")
value2 = prompt ("Enter Number 2")

if (value1 > value2){
    alert (value1 + "is bigger then" + value2)
}
else if (value2 > value1){
    alert(value1 + "is less then" + value2)
}
else if(value1 == value2){
    alert (value1 + "both values are equal" + value2)
}
else{
    alert ("Value Enter Karde Bhai ")
}

document.write("<h3>Question No 3</h3>")
var deta1;
data1 = prompt ("Enter A Number")

if (data1 > 0){
    alert ("Number Is Positiv")
}
else if (data1 < 0){
    alert ("Number Is Negative")
}
else {
    alert ("Number Is Zeero")
}
document.write("<h3>Question No 4</h3>")

var vowel;
vowel = prompt("ENTER A ALPHABET \n A PROGRAM TO CHECK ALPHABET IS VOWEL OR NOT")
if (vowel == "a" || vowel == "e" || vowel =="i" || vowel == "o" || vowel == "u"){
    alert ("alphabet is vowel")
}
else {
    alert("Alphabet is not a vowel")
}
document.write("<h3>Question No 5</h3>")

var password = prompt ("Enter your password")
var password1 = prompt ("Re-Enter your password")

if (password == password1){
    alert ("Correct! The password you Entered matches the original password")
    }
    else {
        alert ("password is Incorrect")
    }

    document.write("<h3>Question No 6</h3>")

    var greeting;
    var hour;
    hour = prompt("Enter time in 24hr format")
    if (hour < 18){
        alert ("Good day")
    }
    else {
        alert ("Good evening")
    }

    
