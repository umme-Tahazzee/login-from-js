document.getElementById('btn-cash-out').addEventListener('click', function(e){
   e.preventDefault();
 
   const agentNumber = getInputFieldValueById('agent-number')
   const addCashout = getInputFieldValueById('add-cash-out')
   const cashOutPin = getInputFieldValueById('cash-out-pin')
   const accountBalance = getTextFieldValueById('account-balance')
   console.log(agentNumber, addCashout, cashOutPin, accountBalance);

   if(cashOutPin === 1234){
       const newBalance = accountBalance - addCashout;
       document.getElementById('account-balance').innerText = newBalance;
       
   }else{
       alert('Something is wrong, please try again!!!!')
   }
   
   
})