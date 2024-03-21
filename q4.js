
function reversestring(string) {
    let getString = string;

    setInterval(() => {

        const lastChar = getString.charAt(getString.length - 1);

        getString = lastChar + getString.slice(0, -1);
        // console.log(getString)

        document.getElementById("reverse").innerText = getString;
    }, 500);

    // return getString;

}
const reverseelement = "Salman";
reversestring(reverseelement);

console.log(reversestring);
