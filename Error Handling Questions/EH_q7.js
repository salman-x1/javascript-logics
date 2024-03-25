//Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index


function invalidIndex(arrayvarible, index) {
    try {
        if (index < 0 || index >= arrayvarible.length) {
            throw new RangeError("Array Length must be less than the total length of array and greater than 0");
        }
        else {
            console.log(arrayvarible[index]);
        }
    } catch (error) {
        if (error instanceof RangeError) {
            console.log(error.message);
        }
        else {
            console.log(error.message);
        }
    }
}

invalidIndex([1, 2, 3], 5)