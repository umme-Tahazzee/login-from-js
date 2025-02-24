document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addAmmount = getInputFieldValueById("add-ammount");
    const pinNumber = getInputFieldValueById("pin");
    console.log(addAmmount, pinNumber);

    if (pinNumber === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      const updateBalance = addAmmount + accountBalance;
      document.getElementById("account-balance").innerText = updateBalance;
      // add to transection history
      const p = document.createElement("p");
      p.innerText = `Added: ${addAmmount} Tk. Balace : ${updateBalance}`;
      console.log(p);
      //shoud be a common function
      document.getElementById('transection-container')
      .appendChild(p)
    } else {
      alert("Something is wrong please try again");
    }
  });
