//Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country
    }
}

const person1 = new person("Salman", 22, "Pakistan")
const person2 = new person("Ahmad", 24, "Pakistan")

console.log(person1, person2);
console.log(person2);
