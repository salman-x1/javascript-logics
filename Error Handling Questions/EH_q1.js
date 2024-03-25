//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function handleErrorFunction (numberOne) {
    if (Number.isInteger(numberOne)) {
        console.log("integar")
    }
    else {
        throw err ("not integar")
    }
}

try {
    handleErrorFunction (sfds);
} catch (error) {
    console.log("Error is :" , error.message)
}