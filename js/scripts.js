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
  } else if (transactionType==="withdrawal") {
    bankAccount.withdraw(amount);
  } else {
    console.log("invalid, try again.")
  }
  return bankAccount.getBalance();
}

window.addEventListener("load", function() {
  document.getElementById("depositButton").addEventListener("click", handleDepositSubmission);
  document.getElementById("withdrawButton").addEventListener("click", handleWithdrawSubmission);
});

function handleDepositSubmission(event) {
  event.preventDefault();
  let myBankAccount = new BankAccount();
  const depositValue = parseFloat(document.getElementById("deposit").value);
  
  if (isNaN(depositValue)) {
    console.log("invalid deposit value, try again.");
    return;
  }
  
  myBankAccount.deposit(depositValue);

  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = " $" + myBankAccount.getBalance().toFixed(2);
};

function handleWithdrawSubmission(event) {
  event.preventDefault();
  let myBankAccount = new BankAccount();
  const withdrawalValue = parseFloat(document.getElementById("withdrawal").value);
  
  if (isNaN(withdrawalValue)) {
    console.log("invalid withdrawal value, try again.");
    return;
  }
  
  myBankAccount.withdraw(withdrawalValue);

  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = " $" + myBankAccount.getBalance().toFixed(2);
};