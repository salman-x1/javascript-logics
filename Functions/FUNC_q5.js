function upperCaseFunction(stringvar) {
    let array1 = stringvar.split(' ');

    let otherArray=[];

    for (let x=0; x<array1.length; x++) {
        otherArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));

        
    }
    return otherArray.join(' ');
}

console.log(upperCaseFunction("salman is here"));