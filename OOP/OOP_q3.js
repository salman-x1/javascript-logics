// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.



class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    diplay() {

        console.log(`This is make ${this.make} , Model is: ${this.model} and Year is: ${this.year}`);
    }
}


// console.log(VehicleDetails1.diplay());

class Car extends Vehicle {
    constructor(make, model, year, nOfDoors) {

        super(make, model, year);
        this.nOfDoors = nOfDoors;
    }
    display() {
        super.diplay();
        console.log(`This car has ${this.nOfDoors} Doors`)
    }
}

const VehicleDetails1 = new Vehicle("LAMB", 2000, 2000);
const carDoors = new Car("Toyota", 2022, 2022, 4);

carDoors.display();
VehicleDetails1.diplay();




