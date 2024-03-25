//Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function secondNumberZero(number1, number2) {
    result=number1+number2;
    try {
        
        if (number2==0) {
            throw new Error("Number 2 cannot be zero");
        }
        else {
            // return result
            console.log(result);
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message); 
    }
}

secondNumberZero(8,0);