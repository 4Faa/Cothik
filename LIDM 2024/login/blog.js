document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();
  
    // Get the values of the email and password fields
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    // Check if both fields are filled out
    if (email === '' || password === '') {
      // If not, display an error message and stop the form from being submitted
      alert('Please make sure both the email and password fields are filled out.');
      return;
    }
  
    // If both fields are filled out, submit the form normally
    this.submit();
  });