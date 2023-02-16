// Business Logic
// BankAccount Constructor
function BankAccount(accountID) {
  this.balance = 0;
}
// BankAccount Prototype
BankAccount.prototype = {
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  },
  getBalance: function() {
    return this.balance;
  }
};


function bankTransaction(transactionType, amount, bankAccount) {
  if (transactionType === "deposit") {
    bankAccount.deposit(amount);
  } else if (transactionType==="withdraw") {
    bankAccount.withdraw(amount);
  } else {
    console.log("invalid, try again.")
  }
  return bankAccount.getBalance();
}

let myBankAccount = new BankAccount();

function updateBalance() {
  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = "$" + myBankAccount.getBalance().toFixed(2);
}

window.addEventListener("load", function() {
  document.getElementById("depositButton").addEventListener("click", handleDepositSubmission);
  document.getElementById("withdrawButton").addEventListener("click", handleWithdrawSubmission);
  updateBalance();
});

function handleDepositSubmission(event) {
  event.preventDefault();
  const depositValue = parseFloat(document.getElementById("deposit").value);
  
  if (isNaN(depositValue)) {
    console.log("invalid deposit value, try again.");
    return;
  }
  
  myBankAccount.deposit(depositValue);
  updateBalance();

  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = " $" + myBankAccount.getBalance().toFixed(2);
};

function handleWithdrawSubmission(event) {
  event.preventDefault();
  const withdrawalValue = parseFloat(document.getElementById("withdrawal").value);
  
  if (myBankAccount.PIN !== PIN) {
    console.log("PIN is incorrect, try again.");
    return;
  }

  if (isNaN(withdrawalValue)) {
    console.log("invalid withdrawal value, try again.");
    return;
  }
  
  myBankAccount.withdraw(withdrawalValue);
  updateBalance();

  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = " $" + myBankAccount.getBalance().toFixed(2);
};


//Alt. for BankAccount Constructor

function BankAccount(accountName, PIN) {
  this.accountName = accountName;
  this.PIN = PIN;
  this.balance = 0;
}