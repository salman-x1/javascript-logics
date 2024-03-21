// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  


const year = new Date().getFullYear();
let day = new Date().getDay;

function checkleapyear() {
let leapYear= document.getElementById("leapyear").value;

if (leapYear % 4 ===0) {
    document.getElementById("result").innerHTML = leapYear + "<br>" +"Is a Leap Year";
}
else {
    document.getElementById("result").innerHTML = "Is  not a Leap Year";
}
}
document.getElementById("submityear").addEventListener("click" , checkleapyear);
