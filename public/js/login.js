const loginForm = document.getElementById('myForm2');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let errorDiv = document.getElementById('error');


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errorDiv.hidden = false;
      errorDiv.innerHTML = 'Please enter a valid email address';
      emailInput.focus();
      return;
    }
    
   
    if (passwordInput.value.trim() === '') {
      errorDiv.hidden = false;
      errorDiv.innerHTML = 'You must enter a password';
      passwordInput.focus();
      return;
    }
    

    
    loginForm.submit();
  });