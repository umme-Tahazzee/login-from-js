//common share function

function getInputFieldValueById(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
   
   return inputNumber;
}


function getTextFieldValueById(id){
   const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue)  
   return textNumber;
}


//hide all the section
function showSectionById(id){
     document.getElementById('add-money-section').classList.add('hidden')
     document.getElementById('cash-out-section').classList.add('hidden')
     document.getElementById('transection-section').classList.add('hidden')
     // show the section with the provided id as parameter
     document.getElementById(id).classList.remove('hidden')
}


