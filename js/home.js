
///add amount
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

// cashout of this

document.getElementById('btn-cash-out').addEventListener('click', function (e) {
  e.preventDefault()

  const agentNumber = document.getElementById('agent-number').value;
  const cashOutAmount = document.getElementById('add-cash-out').value
  const cashOutPinNumber = document.getElementById('cash-out-pin').value

  if (cashOutPinNumber === '1234') {
    const intCashOutAmount = parseFloat(cashOutAmount);
    const inputBalance = document.getElementById('account-balance').innerHTML
    const intInputBalance = parseFloat(inputBalance)
    if (intInputBalance < intCashOutAmount) {
      alert('Dont have engouh money')
    }
    const updateAmount = intInputBalance - intCashOutAmount;
    document.getElementById('account-balance').innerHTML = updateAmount;

  } else {
    alert('Something is wrong!! please try again..')
  }

})


//features file


//show cashout form
 document.getElementById('btn-show-cash-out').addEventListener('click', function(){
       document.getElementById('cash-out-form').classList.remove('hidden')
       document.getElementById('add-money-form').classList.add('hidden')
      
 })

 //show add money form

 document.getElementById('btn-show-add-money').addEventListener('click', function(){
  document.getElementById('add-money-form').classList.remove('hidden')
  document.getElementById('cash-out-form').classList.add('hidden')
      
 }) 



