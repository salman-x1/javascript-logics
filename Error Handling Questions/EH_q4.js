//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.

function numberIsNegative(number1) {

    try {
        if (number1 < 0) {
            throw new Error("Number cannot be negative")
        }
        else {
            console.log(number1);
        }

    } catch (error) {
        console.log(error.message);
    }
}

numberIsNegative(-2);  //Error
numberIsNegative(0); //return number

