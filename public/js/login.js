/* const loginForm = document.getElementById('myForm2');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let errorDiv = document.getElementById('error');

function checkEmail(email, varName){
  if(typeof email !== 'string'){
      throw `${varName} must be a string`;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
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


/* loginForm.addEventListener('submit', (event) => {
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
      checkEmail(emailInput.value.trim(), "Email");
      checkPassword(passwordInput.value.trim(), "Password");;
    } catch (error) {
      errorDiv.hidden = false;
      errorDiv.innerHTML = error;
      return;
    }
    
  const formData = new FormData(loginForm);
  const serializedFormData = new URLSearchParams(formData).toString();
  fetch('/login', {
    method: 'POST',
    body: serializedFormData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status + ': ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // process the response data
  })
  .catch(error => {
    console.error(error);
  });
    
    // loginForm.submit();

    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
          email: emailInput.value.trim(),
          password: passwordInput.value.trim()
      },
      success: function (data) {
          // Handle successful login response
          console.log("Success Data: "+data);
          // window.location.href = '/home'; // Redirect to dashboard on success
      },
      error: function (xhr, status, error) {
          // Handle error response
          console.log(error);
          errorDiv.hidden = false;
          errorDiv.innerHTML = 'Something went wrong. Please try again later.';
      }
  });
  }); */

$("#submitBtn").on('click', function(event){
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
      checkEmail(emailInput.value.trim(), "Email");
      checkPassword(passwordInput.value.trim(), "Password");;
    } catch (error) {
      errorDiv.hidden = false;
      errorDiv.innerHTML = error;
      return;
    }
/* 
    let requestConfig = {
      method: 'POST',
      url: '/login',
      data: {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
        },
    };
    
    loginForm.submit(); */
  });


const loginForm = $("#myForm2");
const emailInput = $("#email");
const passwordInput = $("#password");
let errorDiv = $("#error");
let emailErrorDiv = $("#emailError");
let passwordErrorDiv = $("#password-error");

function checkEmail(email, varName) {
  if (typeof email !== "string") {
    throw `${varName} must be a string`;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    throw `The ${varName} must be a valid email address`;
  }
}

function checkPassword(password, varName) {
  if (typeof password !== "string") {
    throw `${varName} must be of string type`;
  }

  if (password.length < 8) {
    throw "Password must be at least 8 characters long";
  }
  if (!/[a-z]/.test(password)) {
    throw "Password must contain at least one lowercase letter";
  }
  if (!/[A-Z]/.test(password)) {
    throw "Password must contain at least one uppercase letter";
  }
  if (!/\d/.test(password)) {
    throw "Password must contain at least one number";
  }
}

emailInput.on("input", () => {
  const email = emailInput.val().trim();

  if (email === "") {
    $("#email-status").html("");
    emailErrorDiv.text("");
    emailInput.get(0).setCustomValidity("");
  } else {
    try {
      checkEmail(email, "Email");
      emailErrorDiv.text("");
      emailInput.get(0).setCustomValidity("");

      $.ajax({
        url: "/validate-email",
        method: "POST",
        data: JSON.stringify({ email }),
        contentType: "application/json",
        dataType: "json",
      })
        .done((data) => {
          if (!data.exists) {
            $("#email-status").html(
              '<i class="fa-sharp fa-solid fa-circle-xmark" style="color: red;"></i>'
            );
            emailErrorDiv.text("This email does not exist in our database");
            emailInput
              .get(0)
              .setCustomValidity("This email does not exist in our database");
          } else {
            $("#email-status").html(
              '<i class="fa-solid fa-check" style="color: green;"></i>'
            );
            emailErrorDiv.text("");
            emailInput.get(0).setCustomValidity("");
          }
        })
        .fail((jqXHR, textStatus, errorThrown) => {
          console.error(errorThrown);
        });
    } catch (error) {
      $("#email-status").html(
        '<i class="fa-sharp fa-solid fa-circle-xmark" style="color: red;"></i>'
      );
      emailErrorDiv.text(error);
      emailInput.get(0).setCustomValidity(error);
    }
  }
});



passwordInput.on("input", () => {
  try {
    checkPassword(passwordInput.val().trim(), "Password");
    passwordErrorDiv.text("");
    passwordInput.get(0).setCustomValidity("");
  } catch (error) {
    passwordErrorDiv.text(error);
    passwordInput.get(0).setCustomValidity(error);
  }
});


loginForm.on("submit", (event) => {
  
  if (emailInput.val().trim() === '') {
    emailErrorDiv.text("Please enter emailId");
    emailInput.get(0).setCustomValidity("");
    emailInput.focus();
    return;
  }

  if (passwordInput.val().trim() === '') {
    passwordErrorDiv.text("Please enter password");
    passwordInput.get(0).setCustomValidity("");
    passwordInput.focus();
    return;
  }

  if (!loginForm.get(0).checkValidity()) {
    errorDiv.prop("hidden", false);
    errorDiv.html("Please correct the errors above");
    return;
  }
});