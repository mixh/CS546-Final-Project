const form = document.getElementById('form10');
const messagesList = document.getElementById('.messageslist');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('srk')
  const formData = new FormData(form);
  
  fetch(form.action, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Update the messages list with the new message
    const message = document.createElement('li');
    message.innerHTML = `<li>${data.createdAt}</li><li>${data.senderName}: ${data.content}</li>`;
    messagesList.appendChild(message);
    
    // Reset the form
    form.reset();
  })
  .catch(error => console.error(error));
});
