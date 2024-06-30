document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[name="name"], input[name="email"], textarea[name="message"]');
    const errorSpans = form.querySelectorAll('.name-error, .email-error, .message-error');

    // Function to validate email using regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }``
    // Event listeners to check if inputs have been edited
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorSpan = form.querySelector(`.${input.name}-error`);
            const inputValue = input.value.trim();

            if (inputValue === '') {
                errorSpan.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} cannot be empty.`;
                errorSpan.style.display = 'block'; // Hide error message when input is empty
                input.classList.add('error-border');
            } else {
                if (input.name === 'email' && !isValidEmail(inputValue)) {
                    errorSpan.textContent = 'Please enter a valid email.';
                    errorSpan.style.display = 'block'; // Hide error message for email
                    input.classList.add('error-border');
                } else {
                    errorSpan.textContent = '';
                    errorSpan.style.display = 'block'; // Hide error message when input is corrected
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
