const Account = require('./account');

const myAccount = new Account('Nathan', 500000, 'ID12345');
Account.tellAboutClass();
myAccount.giveAccountInfo();
Account.tellTheTime();
myAccount.makeDeposit(150000);

myAccount.withdraw(400000);

myAccount.makeDeposit(700000);
myAccount.makeDeposit(300000);const Account = require('./account');

const myAccount = new Account('Nathan', 500000, 'ID12345');
Account.tellAboutClass();
myAccount.giveAccountInfo();
Account.tellTheTime();
myAccount.makeDeposit(150000);

myAccount.withdraw(400000);

myAccount.makeDeposit(700000);
myAccount.makeDeposit(300000);