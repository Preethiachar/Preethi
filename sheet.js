let balance = 1000;  // Initial balance

// Function to show withdraw form
function showWithdrawForm() {
  document.getElementById('withdraw-form').style.display = 'block';
}

// Function to close any form
function closeForm(formId) {
  document.getElementById(formId).style.display = 'none';
}

// Function to withdraw money
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  
  // Validate withdrawal amount
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid amount.");
  } else if (withdrawAmount > balance) {
    alert("Insufficient funds.");
  } else {
    // Deduct the withdrawal amount from balance
    balance -= withdrawAmount;
    document.getElementById('balance-text').innerText = `Balance: $${balance}`;
    closeForm('withdraw-form');
  }
}

// Function to check the balance
function checkBalance() {
  alert(`Your balance is $${balance}`);
}
