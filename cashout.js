document.getElementById('cashout').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashoutInput = document.getElementById('cashoutAmount').value;
    const pinNumber = document.getElementById('cashout-pin').value;
    console.log(pinNumber);
    if(pinNumber === '1234'){
        console.log(cashoutInput);
        const balance = document.getElementById('balance').innerText;
        console.log(balance)
        const balanceNumber = parseInt(balance);
        const cashoutNumber = parseInt(cashoutInput);
        const updatedBalance = balanceNumber - cashoutNumber;
        console.log(updatedBalance);
        document.getElementById('balance').innerText = updatedBalance;
    }
    else{
        alert('pin is incorrect')
    }
})