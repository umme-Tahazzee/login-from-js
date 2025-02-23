

document.getElementById('btn-add-money').addEventListener('click', function(e){
  e.preventDefault()
  const addAmmount = document.getElementById('add-ammount').value;
  const pinNumber = document.getElementById('pin').value
  
  console.log(addAmmount, pinNumber, );
  if(pinNumber !== '1234'){
    alert('Something is wrong')
  }
  
})