// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


function FahrenheitConverter() {
    let fahrenheit = document.getElementById('inputFahrenheit').ariaValueMax;
    
    let celsiusFormula= (fahrenheit-32)*(5/9);
    document.getElementById('outputCelsius').innerHTML= celsiusFormula;
    console.log(celsiusFormula);
}

function CelsiusConverter(){
    let celsius = document.getElementById('inputCelsius').value;
    
    let fahrenheitFormula = (9/5)*celsius+32;

    document.getElementById('outputFahrenheit').innerHTML=fahrenheitFormula;
}