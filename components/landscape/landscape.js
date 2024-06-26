/*
 * © Copyright (c) Betim Cakiqi 2024. All rights reserved.
 * This code is the property of Betim Cakiqi. The design elements are the property of Figma.
 * You may not reproduce, distribute, modify, or use this code without permission.
 */
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
