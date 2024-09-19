document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('amount').value;
    const pinNumber = document.getElementById('add-money-pin').value;
    console.log(pinNumber);
    if(pinNumber === '1234'){
        console.log(addMoneyInput);
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseInt(balance);
        const addMoneyInputNumber = parseInt(addMoneyInput);
        const updatedBalance = balanceNumber + addMoneyInputNumber;
        console.log(updatedBalance);
        document.getElementById('balance').innerText = updatedBalance;
    }
    else{
        console.log('pin is incorrect');
    }
})
