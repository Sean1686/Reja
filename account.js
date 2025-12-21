const currentDate = require('moment');

class Account {
    #amount;
    #account_id;
    constructor(username, amount, account_id) {
        this.username = username;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    checkBalance() {
        console.log(`Your balance is: ${this.#amount}`);
        return this.#amount;
    }
    withdraw(amount) {
        if (amount > this.#amount) {
            this.#amount -= amount; 
            console.log('Insufficient funds');
        } else {
            this.#amount -= amount;
            console.log(`Withdrew: ${amount}$. Your new balance: ${this.#amount}$`);
        }
    }
     
    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Deposited: ${amount}$. Your new balance: ${this.#amount}$`);
    }
    giveAccountInfo() {
        console.log(`Hi Mr.${this.username}, Your balance is: ${this.#amount}$`);
        console.log(`Your account ID is: ${this.#account_id}`);
    }

    static tellAboutClass() {
        console.log('This is the Account class for managing user accounts and balances.');
    }

    static tellTheTime() {
        console.log('Current date and time:', currentDate().format('YYYY-MM-DD HH:mm:ss'));
    }
}

module.exports = Account;