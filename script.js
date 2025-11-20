function submitFeedback() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (!name || !message) {
    alert("Please fill in all fields!");
    return;
  }

  const feedbackList = document.getElementById('feedback-list');
  const newFeedback = document.createElement('div');
  newFeedback.classList.add('feedback-item');
  newFeedback.innerHTML = `<strong>${name}</strong>: ${message}`;
  feedbackList.appendChild(newFeedback);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
