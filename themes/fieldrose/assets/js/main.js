// Collapses the main navigation behind the menu button on small screens.
// Everything is gated on the `js` class: when this script does not run,
// the CSS keeps the menu visible and the button hidden, so navigation
// never depends on JavaScript.
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');

    if (!toggle || !nav) {
        return;
    }

    document.documentElement.classList.add('js');

    toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open', !isOpen);
    });
})();
