

// let input1 = document.getElementById('inputUserNumber1').value;
// let input2 = document.getElementById('inputUserNumber2').value;


function multiplyFunction() {
    let input1 = document.getElementById('inputUserNumber1').value;
    let input2 = document.getElementById('inputUserNumber2').value;

    let multiply = input1 * input2;
    console.log(multiply)
    document.getElementById('outputResult').innerHTML = multiply;
};
function divideFunction() {
    let input1 = document.getElementById('inputUserNumber1').value;
    let input2 = document.getElementById('inputUserNumber2').value;
    let divide = input1 / input2;
    document.getElementById('outputResult').innerHTML = divide;
};