// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  



function absoluteFunction() {
    let userInputNumber = document.getElementById('userInput').value;
    let secondValue = 13;
    let difference = (userInputNumber - secondValue);
    // console.log(difference);
    if (difference > 13) {

        let absoluteDifference = (difference * 2);
        document.getElementById('resultAbsoluteDiff').innerHTML = "Absolute Difference is : "+ absoluteDifference;
    }
    else {
        document.getElementById('resultAbsoluteDiff').innerHTML = "Difference is: "+ difference;
    }
}
