
//form submit reloading the page


//step-1 event handler
document.getElementById("btn-login")
                .addEventListener('click', function(event){
                  event.preventDefault(); 
            
                 //step-2 : get the phone number
              const phoneNumber = document.getElementById('phone-number').value
              const pinNumber = document.getElementById('pin').value
              const pin = parseFloat(pinNumber)
              if(pin === 1234){
                window.location.href = '/home.html';
              }else{
                alert('Login Failed !! try again.')
              }
              
               
            
                
 })





