
// let originalString ;
let modifiedString;

function swapString(originalString) {
    if (originalString.length <= 1) {
        return originalString;
    }
    else {
        let firstString = originalString.slice(0, 1);
        let lastString = originalString.slice(-1);
        let midString = originalString.slice(1, -1);
        let tempChar = firstString;
        firstString = lastString;
        lastString = firstString;
        return modifiedString = (lastString + midString + tempChar);
    }


}

modifiedString = swapString("Salman");
console.log(modifiedString);

