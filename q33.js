// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  



function twoNumber(number1, number2) {
    if ((number1 && number2) >= 40 && (number1 && number2) <= 60) {

        return "Number 1 & Number 2 falls within the range of 40 to 60"
    }
    else if ((number1 && number2) >=70 && (number1 && number2) <= 100) {
        return "Number 1 & 2 falls within the range of 70 to 100"
    }
    else {
        return "Both numbers doesn't falls within the range of both ranges (40 to 60) and (70 to 100"
    }
}
console.log(twoNumber(50, 50));
console.log(twoNumber(100, 90));


