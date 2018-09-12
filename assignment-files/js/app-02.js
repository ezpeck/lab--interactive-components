/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

var formulario = document.forms.formulario;
 formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var usernameTexBox = e.target.elements.username;
    if (usernameTexBox.value !== '') {
        document.querySelector('.validation--username').textContent = 'Success!!!';
    } else{
        document.querySelector('.validation--username').textContent = 'User cannot be blank';  
    }
    
    var passwordTextBox = e.target.elements.userpassword;
    var confirmTextBox = e.target.elements.confirmpassword;
    if (passwordTextBox.value.length >= 8) {
        document.querySelector('.validation--user-password').textContent = 'Success!!!';
        if (confirmTextBox.value === passwordTextBox.value) {
            document.querySelector('.validation--confirm-password').textContent = 'Success!!!';
        } else{
            document.querySelector('.validation--confirm-password').textContent = 'Password must match original password';
        }
    } else {
        document.querySelector('.validation--user-password').textContent = 'Password must be longer than 8 characters';
        document.querySelector('.validation--confirm-password').textContent = 'Password must be longer than 8 characters & match original password';
    }

    var taxidTextBox = e.target.elements.taxid;
    if ((taxidTextBox.value * 1) > 0 && taxidTextBox.value.length >= 10) {
        document.querySelector('.validation--tax-id').textContent = 'Success!!!';
    } else if (taxidTextBox.value === ''){
        document.querySelector('.validation--tax-id').textContent = 'Must provide Tax ID';
    } else {
        document.querySelector('.validation--tax-id').textContent = 'Input field must contain a number > 0 and is 10 digits';
    }

    var accountTextBox = e.target.elements.account;
    if (accountTextBox.value === "") {
        document.querySelector('.validation--account').textContent = 'You must select an Option';
    }else {
        document.querySelector('.validation--account').textContent = 'Success!!!';
    }
    
    var termsofserviceCheckBox = e.target.elements.termsofservice;
    if (termsofserviceCheckBox.checked === true) {
        document.querySelector('.validation--terms-of-service').textContent = "Success!!!";
    } else {
        document.querySelector('.validation--terms-of-service').textContent = "You must check this box before proceding";
    }
    
});