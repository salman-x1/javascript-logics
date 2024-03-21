
// let date;
// let time;


const date = new Date();
const time = new Date();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


let hours = new Date().getHours();
let timePeriod = hours >= 12 ? "PM" : "AM";

// console.log(timePeriod)
if (hours % 12 == 0)
    hours = 12;
else
    hours = (hours % 12);
console.log("updated hours " + hours)


console.log("Current Time is: ", hours, timePeriod, ":", time.getMinutes(), ":", time.getMilliseconds());


switch (date.getDay()) {
    case 0:
        console.log("Today is: ", day[0]);
        break;
    case 1:
        console.log("Today is: ", day[1]);
        break;
    case 2:
        console.log("Today is: ", day[2]);
        break;
    case 3:
        console.log("Today is: ", day[3]);
        break;
    case 4:
        console.log("Today is: ", day[4]);
        break;
    case 5:
        console.log("Today is: ", day[5]);
        break;
    case 6:
        console.log("Today is: ", day[6]);
        break;

}


