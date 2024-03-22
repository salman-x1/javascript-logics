// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

// originalString = "Salman"

function rmvCharacter(string, index) {
    // slicedString=string[index]
    if (index<0 || index>=string.length){
        return string
    }
    else {
        let modifiedString;
        return modifiedString = string.slice(0, index) + string.slice(index+1);
    }

}
const modifiedString = rmvCharacter("Salman", 2);
console.log(modifiedString);
