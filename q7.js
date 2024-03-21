
let year1 = 2014;
let year2 = 2050;

for (year1; year1<=year2; year1++){
    const date = new Date(year1, 0, 1) 

    if( date.getDay() == 0) {
        console.log(year1 + "" + "First Day is Sunday");
    }
}