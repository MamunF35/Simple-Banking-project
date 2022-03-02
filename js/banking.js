// let finalBalance;
document.getElementById("deposit-button").addEventListener("click", function () {
    // console.log("deposit button clicked");

    
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    if (depositAmount == "") {
        return;
    }

    const depositTotal = document.getElementById("deposit-total");
  

    const newDepositTotal = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;

    depositInput.value = "";


    // update account balance
    const balance = document.getElementById("balance-total");
    const finalBalance = parseFloat(newDepositTotal) + parseFloat(balance.innerText);
    balance.innerText = finalBalance;    
})

// withdraw balance

document.getElementById("withdraw-button").addEventListener("click", function () {
    let withdrawalInput = parseFloat(document.getElementById("withdraw-input").value);

    
    // if (!(/^\d+$/.test(document.getElementById("withdraw-input").value))) {
    //     console.log("khaise re");
    //     return;
    // }

    let currentTotalBalance = parseFloat(document.getElementById("balance-total").innerText);

    const newTotalBalance = currentTotalBalance - withdrawalInput;


    let withdrawalAmount = parseFloat(document.getElementById("withdraw-amount").innerText);
    let totalWithdraw = withdrawalInput + withdrawalAmount;
    console.log(totalWithdraw);
    document.getElementById("withdraw-amount").innerText = totalWithdraw;

  

    document.getElementById("balance-total").innerText = newTotalBalance;
    document.getElementById("withdraw-input").value = "";
})