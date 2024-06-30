document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    let formEdited = false; // Flag to track if form has been edited

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for now

        // Validate name input
        const nameInput = form.querySelector('input[name="name"]');
        const nameValue = nameInput.value.trim();
        const nameError = form.querySelector('.name-error');

        if (nameValue === '') {
            nameError.textContent = 'Name cannot be empty';
            nameError.style.display = 'block'; // Show error message
            nameInput.classList.add('error-border');
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none'; // Hide error message
            nameInput.classList.remove('error-border');
        }

        // Validate email input
        const emailInput = form.querySelector('input[name="email"]');
        const emailValue = emailInput.value.trim();
        const emailError = form.querySelector('.email-error');

        if (emailValue === '') {
            emailError.textContent = 'Email cannot be empty';
            emailError.style.display = 'block'; // Show error message
            emailInput.classList.add('error-border');
        } else if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Please enter a valid email';
            emailError.style.display = 'block'; // Show error message
            emailInput.classList.add('error-border');
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none'; // Hide error message
            emailInput.classList.remove('error-border');
        }

        // Validate message input
        const messageInput = form.querySelector('textarea[name="message"]');
        const messageValue = messageInput.value.trim();
        const messageError = form.querySelector('.message-error');

        if (messageValue === '') {
            messageError.textContent = 'Message cannot be empty';
            messageError.style.display = 'block'; // Show error message
            messageInput.classList.add('error-border');
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none'; // Hide error message
            messageInput.classList.remove('error-border');
        }

        // If any field has been edited, set formEdited to true
        if (nameInput.classList.contains('error-border') ||
            emailInput.classList.contains('error-border') ||
            messageInput.classList.contains('error-border')) {
            formEdited = true;
        }

        // Check if form has been edited
        if (!formEdited) {
            // Remove all error messages
            form.querySelectorAll('.name-error, .email-error, .message-error').forEach(errorSpan => {
                errorSpan.textContent = '';
                errorSpan.style.display = 'none';
            });
        }

        // If all validations pass and form has been edited, you can submit the form
        if (nameValue !== '' && isValidEmail(emailValue) && messageValue !== '') {
            form.submit(); // Submit the form if validation succeeds
        }
    });

    // Function to validate email using regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Event listeners to check if inputs have been edited
    const inputs = form.querySelectorAll('input[name="name"], input[name="email"], textarea[name="message"]');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorSpan = form.querySelector(`.${input.name}-error`);
            const inputValue = input.value.trim();

            if (inputValue === '') {
                errorSpan.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} cannot be empty.`;
                errorSpan.style.display = 'block'; // Show error message when input is empty
                input.classList.add('error-border');
            } else {
                if (input.name === 'email' && !isValidEmail(inputValue)) {
                    errorSpan.textContent = 'Please enter a valid email.';
                    errorSpan.style.display = 'block'; // Show error message for email
                    input.classList.add('error-border');
                } else {
                    errorSpan.textContent = '';
                    errorSpan.style.display = 'none'; // Hide error message when input is corrected
                    input.classList.remove('error-border');
                }
            }
        });
    });

    // Prevent default validation tooltips and messages
    form.addEventListener('invalid', function (event) {
        event.preventDefault();
    }, true);
});
