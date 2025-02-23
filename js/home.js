

document.getElementById('btn-add-money').addEventListener('click', function (e) {
 e.preventDefault()
 const addAmmount = document.getElementById('add-ammount').value;
 const pinNumber = document.getElementById('pin').value

 console.log(addAmmount, pinNumber,);
 if (pinNumber === '1234') {
  console.log('adding money to ur account');
  //get the current balance
  const balance = document.getElementById('account-balance').innerHTML

  
  //add amount calculate
  const addAmmountNumber = parseFloat(addAmmount)
  const BalanceNumber = parseFloat(balance)
  const currentBalance = (addAmmountNumber + BalanceNumber)
  console.log(currentBalance);
  
  //update balance in the UI
   document.getElementById('account-balance').innerHTML = currentBalance

 } else {
  alert('something wrong please try again')
 }

})