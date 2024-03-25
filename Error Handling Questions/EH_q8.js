// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

function multipleCatch(number1, number2) {
    try {
        if (number1 !== number2) {
            throw new Error("Both Numbers must be equal")
        }
        result = number1 + number2;
        console.log(result);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Reference Error here");
        }
        else if (error instanceof TypeError) {
            console.log("TypeError Occured here");
        }
        else {
            console.log("Random Error here: ", error.message);
        }
    }
}

multipleCatch(10, 0);