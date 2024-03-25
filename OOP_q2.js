//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.



class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    rectangleArea() {
        return this.width * this.height;
    }
    rectanglePerimeter() {
        return 2*(this.width+this.height);

    }

}

const rect1 = new Rectangle(2,5);

console.log(rect1.rectangleArea());
console.log(rect1.rectanglePerimeter());