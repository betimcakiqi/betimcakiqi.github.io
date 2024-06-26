// orientation.js
function applyOrientationStyles() {
    const body = document.body;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (isMobile && isLandscape) {
        body.classList.add('mobile-landscape');
    } else {
        body.classList.remove('mobile-landscape');
    }
}

window.addEventListener('resize', applyOrientationStyles);
window.addEventListener('orientationchange', applyOrientationStyles);

document.addEventListener('DOMContentLoaded', applyOrientationStyles);
