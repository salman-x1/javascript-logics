//  Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.



class BankAccount {
    constructor(accNumber, balance) {
        this.accNumber = accNumber;
        this.balance = balance;
    }
    deposit(amount) {

        console.log("Deposit Amount: ", this.balance += amount);

    }
    withDraw(amount) {
        console.log("WithDraw Money: ", (this.balance = this.balance - amount));
    }
    display() {
        console.log("Total Balance: ", this.balance);
    }
}

const account1 = new BankAccount("123123123", 4000);

//Deposit Amount
account1.deposit(200);
//WithDraw Money
account1.withDraw(400);
//Total Balance
account1.display();



