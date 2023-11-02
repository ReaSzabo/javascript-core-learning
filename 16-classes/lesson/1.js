// create classes for

// person
class Person {
    hasInnerPeace = null;
    age = null;
    hasFeelings = null;
}

var szabi = new Person();
szabi.age = 32;
szabi.hasInnerPeace = true;
szabi.hasFeelings = false;

console.log(szabi);



var bence = new Person();
bence.age = 31;
bence.hasInnerPeace = true;
bence.hasFeelings = false;

// company 
class Company {
    name = null;
    memberCount = null;
    isBig = null;
}

// bank account
class BankAccount {
    number = null;
    isMoneyOnIt = null;
    balance = null;
    owner = null;
    bank = null;
}

var optBankNyrt = new Company();
optBankNyrt.name = "OTP"

var optBankAccount = new BankAccount();
optBankAccount.number = "11213231";
optBankAccount.isMoneyOnIt = true;
optBankAccount.owner = szabi;
optBankAccount.balance = 1;
optBankAccount.bank = optBankNyrt;


// bank transaction

class Transaction {
    mode = null;
    isIncreasingBalance = null;
    dateOfTransaction = null;
    sender = null;
    receiver = null;
}

var date2 = new Date(2022, 1, 2, 0, 0, 0, 0);

var transfer = new Transaction();
transfer.mode = "online";
transfer.isIncreasingBalance = true;
//transfer.dateOfTransaction = "2022.01.01 12:22:22";
transfer.dateOfTransaction = date2;
transfer.sender = szabi;
transfer.receiver = bence;
