(() => {
    const nav = document.querySelector('nav.site-header-nav');
    if (!nav) return;

    const mobileViewport = window.matchMedia('(max-width: 700px)');
    let directionAnchorY = Math.max(0, window.scrollY);
    let scrollFrame = 0;

    function setHeaderHidden(hidden) {
        nav.classList.toggle('is-hidden', hidden);
    }

    function handleScroll() {
        if (scrollFrame) return;

        scrollFrame = window.requestAnimationFrame(() => {
            scrollFrame = 0;
            updateHeaderVisibility();
        });
    }

    function updateHeaderVisibility() {
        if (!mobileViewport.matches) return;

        const currentScrollY = Math.max(0, window.scrollY);
        if (currentScrollY <= 80) {
            setHeaderHidden(false);
            directionAnchorY = currentScrollY;
        } else {
            const directionDistance = currentScrollY - directionAnchorY;
            if (directionDistance > 12) {
                setHeaderHidden(true);
                directionAnchorY = currentScrollY;
            } else if (directionDistance < -12) {
                setHeaderHidden(false);
                directionAnchorY = currentScrollY;
            }
        }

    }

    function handleViewportChange() {
        directionAnchorY = Math.max(0, window.scrollY);
        setHeaderHidden(false);
    }

    nav.addEventListener('focusin', () => setHeaderHidden(false));
    window.addEventListener('scroll', handleScroll, { passive: true });
    mobileViewport.addEventListener('change', handleViewportChange);
})();
