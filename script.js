const authCard = document.getElementById('authCard');
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Toggle a single state class on the main container.
// CSS handles all panel motion, opacity changes, and content transitions.
signUpBtn.addEventListener('click', () => {
  authCard.classList.add('active');
});

signInBtn.addEventListener('click', () => {
  authCard.classList.remove('active');
});
