(() => {
    const banner = document.querySelector('[data-mobile-desktop-banner]');
    if (!banner) return;

    const mobileViewport = window.matchMedia('(max-width: 700px)');
    const closeButton = banner.querySelector('[data-mobile-desktop-banner-close]');
    const dismissalKey = 'mobileDesktopBannerDismissed';
    let dismissed;

    try {
        dismissed = localStorage.getItem(dismissalKey) === 'true';
    } catch (error) {
        console.error('Unable to read the mobile desktop-site banner dismissal state.', error);
        dismissed = false;
    }

    if (!closeButton) {
        console.error('The mobile desktop-site banner close button is missing.');
        return;
    }

    function updateVisibility() {
        banner.hidden = !mobileViewport.matches || dismissed;
        document.body.classList.toggle('has-mobile-desktop-banner', !banner.hidden);
    }

    closeButton.addEventListener('click', () => {
        dismissed = true;
        banner.hidden = true;
        document.body.classList.remove('has-mobile-desktop-banner');
        try {
            localStorage.setItem(dismissalKey, 'true');
        } catch (error) {
            console.error('Unable to save the mobile desktop-site banner dismissal state.', error);
        }
    });

    updateVisibility();
    window.addEventListener('resize', () => requestAnimationFrame(updateVisibility), { passive: true });
    mobileViewport.addEventListener('change', updateVisibility);
})();
