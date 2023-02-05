"use strict";
class BankAccount {
    constructor(balance, owner) {
        this.balance = balance;
        this.owner = owner;
        this.balance = 0;
        this.transactions = [];
    }
}
class SavingsAccount extends BankAccount {
    constructor(interestRate, balance, owner) {
        super(balance, owner);
        this.interestRate = interestRate;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        this.addInterest(amount);
        const newTransaction = {
            type: "deposit",
            amount,
            date: new Date(),
            balance: this.balance,
        };
        this.transactions.push(newTransaction);
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Not enougth money");
        }
        this.balance -= amount;
        this.addInterest(amount);
        const newTransaction = {
            type: "withdraw",
            amount,
            date: new Date(),
            balance: this.balance,
        };
        this.transactions.push(newTransaction);
    }
    getBalance() {
        console.log(this.balance);
        console.log(this.transactions);
        return this.balance;
    }
    addInterest(amount) {
        this.balance += (amount / 100) * this.interestRate;
    }
}
const savingsAccount1 = new SavingsAccount(10, 0, "Drake");
savingsAccount1.deposit(22);
savingsAccount1.deposit(22);
savingsAccount1.deposit(22);
savingsAccount1.deposit(22);
savingsAccount1.deposit(33);
savingsAccount1.withdraw(140);
savingsAccount1.withdraw(100);
savingsAccount1.deposit(140000000);
savingsAccount1.getBalance();
console.log(savingsAccount1);
//# sourceMappingURL=app.js.map