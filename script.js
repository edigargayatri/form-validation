document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Fetch form values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Reset error messages
  document.getElementById('fullNameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';

  // Validation
  if (fullName.length < 5) {
    document.getElementById('fullNameError').textContent = 'Name must be at least 5 characters';
  }

  if (!email.includes('@')) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
  }

  if (phoneNumber.length !== 10 || phoneNumber === '1234567890') {
    document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
  }

  if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters and not be "password" or part of the name';
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
  }
});
