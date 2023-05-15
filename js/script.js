// Click save button, the button change color and pop a message on screen

document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  var icon = document.getElementById('icon');
  var message = document.getElementById('message');
  // set action: change colout, pop message
  saveButton.addEventListener('click', function() {
    icon.style.color = 'rgb(216, 14, 81)';
    message.textContent = 'The recipe has been saved';

  });
});

