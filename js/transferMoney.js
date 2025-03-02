console.log('transfer money');

document.getElementById('btn-send-money').addEventListener('click', function (e) {
 e.preventDefault()
 const transferAmount = getInputFieldValueById('transfer-money-amount')
 const transferPin = getInputFieldValueById('transfer-pin')
 const accountBalance = getTextFieldValueById('account-balance')


 if (transferPin === 1234) {
  if (transferAmount > accountBalance) {
   alert('Your account is low');
  } else {
   const sendMoney = accountBalance - transferAmount;
   document.getElementById('account-balance').innerText = sendMoney;

   const p = document.createElement('p')
   p.innerText = `Transfer Money is : ${transferAmount} TK. Now Balance is ${sendMoney}`
   document.getElementById("transection-container").appendChild(p);
   console.log(p);
   

  }
 } else {
  alert('Failed to transfer money')
 }




})