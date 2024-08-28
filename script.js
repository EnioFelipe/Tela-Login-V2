submit.addEventListener('click', function() {
var email = querySelector('input[type="email"]');
var password = querySelector('input[type="password"]');
var submit = querySelector('input[type="button"]');

if(email.value == "" || password.value == "") {
    alert('Preecnha os capos');
}

