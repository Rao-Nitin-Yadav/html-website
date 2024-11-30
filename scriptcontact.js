document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const submitButton = form.querySelector('button');
    const successMessage = document.createElement('p');
    const errorMessage = document.createElement('p');

    successMessage.style.color = 'green';
    errorMessage.style.color = 'red';
    successMessage.style.textAlign = 'center';
    errorMessage.style.textAlign = 'center';

    // Form validation before submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission to handle via JS

        let isValid = true;
        let validationMessages = [];

        // Validate Name
        if (nameField.value.trim() === '') {
            isValid = false;
            validationMessages.push('Name is required.');
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailField.value)) {
            isValid = false;
            validationMessages.push('Please enter a valid email.');
        }

        // Validate Message
        if (messageField.value.trim() === '') {
            isValid = false;
            validationMessages.push('Message cannot be empty.');
        }

        // If validation fails, display error message
        if (!isValid) {
            errorMessage.textContent = validationMessages.join(' ');
            form.appendChild(errorMessage);
            return;
        }

        // Disable submit button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate a form submission (replace with actual submission logic)
        setTimeout(function() {
            // Simulate a successful submission
            form.reset(); // Reset the form fields
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';

            successMessage.textContent = 'Your message has been sent successfully!';
            form.appendChild(successMessage);

            // Remove success/error messages after 5 seconds
            setTimeout(function() {
                successMessage.remove();
                errorMessage.remove();
            }, 5000);
        }, 1500);
    });

    // Clear error message when the user starts typing in any field
    nameField.addEventListener('input', function() {
        errorMessage.remove();
    });
    emailField.addEventListener('input', function() {
        errorMessage.remove();
    });
    messageField.addEventListener('input', function() {
        errorMessage.remove();
    });
});