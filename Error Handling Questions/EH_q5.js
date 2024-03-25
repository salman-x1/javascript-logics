//Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.


function arrayFunction(arrayvarible) {
    
        if (arrayvarible.length == []) {
            throw Error("Array cannot be empty")
        }
        else {
            console.log(arrayvarible);
        }
  
}

try {
    arrayFunction([]);
} catch (error) {
    console.log("Error: " , error.message)
    
}



