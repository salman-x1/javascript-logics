// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223


function reverseNumber(number1) {
    //Convert Number1 into String First
    return number1.toString().split('').reverse().join('');
}


console.log(reverseNumber(12345667));
