//Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.


function stringFunction(Stringvar) {
    
    try {
        if (Stringvar.length == 0) {
            throw new Error("String cannot be Empty")
        }
        console.log(Stringvar);
        // return stringvar;
    } catch (error) {
        console.log(error.message);
    }
}

stringFunction('');   //Error
stringFunction('Salman');   //Salman