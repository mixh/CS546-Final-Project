const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const formFields = document.querySelectorAll('.form-field');
const form = document.querySelector('.prof-form');

// Disable form fields by default
formFields.forEach(field => field.disabled = true);

editBtn.addEventListener('click', () => {
  formFields.forEach(field => field.disabled = false);
  editBtn.disabled = true;
  saveBtn.disabled = false;
});

form.addEventListener('submit', async (event) => {
    const formData = new FormData(event.target);
    const url = event.target.action;
    const options = {
      method: 'PUT',
      body: formData
    };
    const response = await fetch(url, options);
    const data = await response.json();
    formFields.forEach(field => field.disabled = true);
    editBtn.disabled = false;
    saveBtn.disabled = true;
});