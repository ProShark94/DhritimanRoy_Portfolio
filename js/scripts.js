// Scripts
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Intersection Observer for scroll-based highlighting
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove("active"));
                    const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Add-on: Highlight on click
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 80,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
// Smooth scrolling using jQuery easing
// const smoothScroll = (target, duration) => {
//     const targetElement = document.querySelector(target);
//     const targetPosition = targetElement.getBoundingClientRect().top;
//     const startPosition = window.pageYOffset;
//     const distance = targetPosition + startPosition;
//     let startTime = null;

//     const animation = currentTime => {
//         if (startTime === null) startTime = currentTime;
//         const timeElapsed = currentTime - startTime;
//         const run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     };

//     const ease = (t, b, c, d) => {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     };

//     requestAnimationFrame(animation);
// };