const registerForm = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageInput = document.getElementById('age');
const zipInput = document.getElementById('zip_code');
const genderInput= document.getElementById('gender');
let errorDiv = document.getElementById('error');




registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  

  if (nameInput.value.trim() === '') {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must enter a name';
    frmLabel.className = 'error';
    firstNameInput.focus();
    return;
  }
  
  

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
  
  
  if (confirmPasswordInput.value.trim() === '') {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must enter a password again';
    confirmPasswordInput.focus();
    return;
  }
  if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must enter a value';
    confirmPasswordInput.focus();
    return;
  }
  
  
  if (ageInput.value.trim() === '') {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must enter your age';
    ageInput.focus();
    return;
  }

  if (Number(ageInput.value.trim())<13) {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must be atleast 13 years old';
    ageInput.focus();
    return;
  }
  if (zipInput.value.trim() === '') {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'Please enter your zip code';
    ageInput.focus();
    return;
  }

  if (genderInput.value.trim() === '') {
    errorDiv.hidden = false;
    errorDiv.innerHTML = 'You must enter a gender';
    ageInput.focus();
    return;
  }



  
  registerForm.submit();
});


  
