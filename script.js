// Check if the user has preferences stored
window.onload = function() {
  const messageElement = document.getElementById('message');
  const userPreference = localStorage.getItem('userPreference');
  
  // Display a message based on stored preference
  if (userPreference) {
    messageElement.innerText = `Welcome back! Your last preference was: ${userPreference}`;
  }
};

// Add event listener to button for animation and storing preference
document.getElementById('animateBtn').addEventListener('click', function() {
  // Add animation class to the button
  const btn = document.getElementById('animateBtn');
  btn.classList.add('animate');
  
  // Store the user's action preference in localStorage
  localStorage.setItem('userPreference', 'Button was clicked and animated!');
  
  // Optional: Remove the animation class after animation ends
  setTimeout(() => {
    btn.classList.remove('animate');
  }, 500); // 500ms duration matches animation time
  
  // Show confirmation message
  document.getElementById('message').innerText = 'Animation triggered! Preference saved.';
});
