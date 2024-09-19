document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('login-pin').value;
    
    console.log(phoneNumber);
    console.log(pinNumber);

    if(phoneNumber==='01303579271' && pinNumber==='1234'){
        console.log('Log in success')
        window.location.href = '/home.html';
    }
    else{
        console.log('phone or pin is incorrect');
    }
})