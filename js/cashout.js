document.getElementById("btn-cash-out").addEventListener("click", function (e) {
    e.preventDefault();

    const addCashout = getInputFieldValueById("add-cash-out");
    const cashOutPin = getInputFieldValueById("cash-out-pin");
    const accountBalance = getTextFieldValueById("account-balance");


    if (isNaN(addCashout)) {
       alert('Failed to withdraw ammount')
        return;
    }
    
    if (cashOutPin === 1234) {
        if (accountBalance < addCashout) {
            alert('Failed to cash out money')
            return;
        }
        const newBalance = accountBalance - addCashout;


        document.getElementById("account-balance").innerText = newBalance;
        console.log(newBalance, typeof newBalance);
        

        //add transection history
        const div = document.createElement("div");
        div.classList.add( "p-4", "rounded", "shadow-md", "mt-2");
        
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("border", "border-gray-500", "p-3", "rounded-lg", "bg-white");
        
        innerDiv.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${addCashout} Money Withdrawn. New balance: ${newBalance}</p>
        `;
        
        // Append innerDiv to div
        div.appendChild(innerDiv);
        
        // Append div to transaction container
        document.getElementById('transection-container').appendChild(div);
        
    } else {
        alert("Something is wrong, please try again!!!!");
    }
});
