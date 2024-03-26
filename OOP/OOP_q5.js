
class Shape {
    constructor() {
        console.log("Constructor is Called");
    }
    calculateArea() {

    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;

    }
    calculateArea() {
        return Math.PI * (this.radius * this.radius);
    }

}
class Triangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }

}

const circle1 = new Circle(8);
console.log("Circle Area is: ", circle1.calculateArea()); 


const triangle1= new Triangle(2,10);
console.log("Triangle Area is: ", triangle1.calculateArea());