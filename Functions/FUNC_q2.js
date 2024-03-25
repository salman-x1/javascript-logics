//Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindromFunction(stringvar) {

    let palindvar = stringvar.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

    return palindvar == palindvar.split('').reverse().join('') 
}




console.log(palindromFunction("12321"));
console.log(palindromFunction("Madam"));

