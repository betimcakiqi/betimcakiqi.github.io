// popup.js

document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        icon: 'success',
        title: '🎉 Marble Properties Website Updated!',
        html: `
            <p class="popup-text">Hello there! I've just launched exciting updates for</p>
            <p class="popup-text">Marble Properties Website</p>
            <p class="popup-text">Explore new features and enhanced functionality I've added.</p>
            <p class="popup-text">Click OK to see what's new!</p>
        `,
        confirmButtonText: 'OK',
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            htmlContainer: 'custom-html-container',
            confirmButton: 'custom-confirm-button',
            content: 'custom-content'
        }
    });
});
