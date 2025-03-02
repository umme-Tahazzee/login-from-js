document.getElementById('btn-show-add-money')
 .addEventListener('click', function () {
  console.log('ok');
  showSectionById('add-money-section')

 })

 document.getElementById('btn-show-cash-out').addEventListener('click', function(){
   console.log('cash-out');
   showSectionById('cash-out-section')
   
 })

 document.getElementById('btn-transfer-money').addEventListener('click', function(){
  showSectionById('transfer-money-section')
})

 

document.getElementById('btn-show-get-bouns').addEventListener('click', function(){
  showSectionById('bonus-section')
  
})

document.getElementById('btn-show-pay-bill').addEventListener('click', function(){
  console.log('bil-section');
    showSectionById('bill-section')
})


document.getElementById('btn-show-transection').addEventListener('click', function(){
  console.log('transection');
  showSectionById('transection-section')
  
})
