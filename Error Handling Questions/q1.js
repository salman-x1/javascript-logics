
function handleErrorFunction (numberOne) {
    if (Number.isInteger(numberOne)) {
        console.log("integar")
    }
    else {
        throw err ("not integar")
    }
}

try {
    handleErrorFunction (sfds);
} catch (error) {
    console.log("Error is :" , error.message)
}