
//form submit reloading the page


//step-1 event handler
document.getElementById("btn-login")
                .addEventListener('click', function(event){
                  event.preventDefault(); 
            
                 //step-2 : get the phone number
              const phoneNumber = document.getElementById('phone-number').value
              const pinNumber = document.getElementById('pin').value
              console.log(phoneNumber, pinNumber);
               window.location.href = '/home.html';
            
                
 })





