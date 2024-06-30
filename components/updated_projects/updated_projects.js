// popup.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if popup has already been shown
    if (!localStorage.getItem('popupShown')) {
        Swal.fire({
            icon: 'none',
            title: '🎉 Marble Properties Website Updated!',
            html: `
                <p class="popup-text">Hello there! I've just launched exciting updates for Marble Properties.</p>
                <p class="popup-text">Explore new features and enhanced functionality I've added.</p>
                <p class="popup-text">Click OK to see what's new!</p>
            `,
            confirmButtonText: 'OK',
            customClass: {
                popup: 'custom-popup',
                title: 'custom-title',
                htmlContainer: 'custom-html-container',
                confirmButton: 'custom-confirm-button'
            },
            showClass: {
                popup: 'animated fadeInDown'
            },
            hideClass: {
                popup: 'animated fadeOutUp'
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            didClose: () => {
                // Store in localStorage that popup has been shown
                localStorage.setItem('popupShown', true);
            }
        });
    }
});
