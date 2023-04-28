const loginForm = document.getElementById('myForm2');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let errorDiv = document.getElementById('error');

function checkEmail(email, varName){
  if(typeof email !== 'string'){
      throw `${varName} must be a string`;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email.match(emailRegex)){
     throw `The ${varName} must be a valid email address`;
  }
}

function checkPassword(password,varName){
  if(typeof password !== 'string'){
    throw `${varName} must be of string type`;
}

if (password.length < 8) {
 throw 'Password must be at least 8 characters long';
}
if (!/[a-z]/.test(password)) {
 throw 'Password must contain at least one lowercase letter';
}
if (!/[A-Z]/.test(password)) {
 throw 'Password must contain at least one uppercase letter';
}
if (!/\d/.test(password)) {
 throw 'Password must contain at least one number';
}
}


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
    try {
      checkEmail(emailInput, "Email");
      checkPassword(passwordInput, "Password");;
    } catch (error) {
      errorDiv.hidden = false;
      errorDiv.innerHTML = error;
      return;
    }
    

    
    loginForm.submit();
  });