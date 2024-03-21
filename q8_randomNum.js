

function randomFunction() {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);

    // let userInputRandom = prompt("Enter a number between 0 and 10")
    let userInputRandom = document.getElementById('randomInput').value;
    if (randomNumber == userInputRandom) {
        document.getElementById("randomNumberOutput").innerHTML = "Good Work";
        // console.log("Good Work");


    }
    else {
        document.getElementById("randomNumberOutput").innerHTML = "Not Matched";
    }
}

