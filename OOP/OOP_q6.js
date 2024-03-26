
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    annualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;

    }

    annualSalary() {
        const basesalary = super.annualSalary();
        const bonussalary = 0.1;
        return (bonussalary + basesalary) * basesalary;
        // console.log("Annual Salary with Bonus" + (bonussalary + basesalary) * basesalary);
    }
}

const manager1 = new Manager("Salman", 2599, "Development");

console.log("Manager Name: ", manager1.name);
console.log("Department Name: ", manager1.department);
console.log("Annual Salary: ", manager1.annualSalary());
// manager1.annualSalary();
