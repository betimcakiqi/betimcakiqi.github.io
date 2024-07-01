document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');

    // Prevent default submission and add validation classes
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);

    // Custom validation messages for each input
    var inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            validateInput(input);
        });

        input.addEventListener('invalid', function() {
            validateInput(input);
        });
    });

    function validateInput(input) {
        var errorMessage = input.nextElementSibling;

        if (input.validity.valid) {
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
            input.classList.remove('is-invalid');
            input.classList.remove('error-border'); // Remove error border class if valid
        } else {
            if (input.validity.valueMissing) {
                var fieldName = input.name;
                errorMessage.textContent = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' cannot be empty.';
            }
            errorMessage.style.display = 'block';
            input.classList.add('is-invalid'); // Add class for custom styling
            input.classList.add('error-border'); // Add error border class
        }
    }
});
