// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  


let inputStatement="gssython";  //test


if (inputStatement.startsWith("py")) {
    console.log(inputStatement);
    return inputStatement
}
else {
    // return "py" + inputStatement;
    console.log("py" + inputStatement);
}







