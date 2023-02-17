class BankAccount {
  constructor(accountNumber) {
    this.balance = 0;
    this.accountNumber = accountNumber;
  }

  deposit() {
    this.balance += 500;
    if (this.depositFunds >= 250) {
    }
  }
  withdraw() {
    this.balance -= 250;
  }
  transferFunds(amount, account1) {
    this.balance -= amount;
    account1.balance += amount;
  }
}

let bankAccount = new BankAccount("Welcome to your new Bank Account.");
console.log(bankAccount.balance);

let newbankAccount = new BankAccount("Transfer your money here.");

bankaccount.transferFunds(100, newbankAccount);
