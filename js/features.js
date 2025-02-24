document.getElementById('btn-show-add-money')
 .addEventListener('click', function () {
  console.log('ok');
  showSectionById('add-money-section')

 })

 document.getElementById('btn-show-cash-out').addEventListener('click', function(){
   console.log('cash-out');
   showSectionById('cash-out-section')
   
 })

 document.getElementById('btn-show-transection').addEventListener('click', function(){
  console.log('transection');
  showSectionById('transection-section')
  
})