
// try {
//     let object1=1;
//     console.log(object1.property);
//     if (error instanceof TypeError) {
//         console.log("TYpeError");
//     }
//     else {
//         console.log("Error");
//     }

// } catch (error) {
//     console.log("Error catch");
// }


try {
    const undefinedObject = undefined;
    if (undefinedObject !== undefined) {
        console.log(undefinedObject.property);
    } else {
        console.log("undefinedObject is undefined");
    }
} catch (error) {
    console.log(error);
}
