// // Wait for the DOM to be fully loaded
// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         // Add shrink class if scrolled down, remove if at top
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink');
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink');
//         }
//     };

//     // Shrink the navbar initially on load
//     navbarShrink();

//     // Shrink the navbar when the page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         // Initialize ScrollSpy - this will automatically add/remove 'active' class to nav links
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav', // The element containing the nav links ScrollSpy should update
//             offset: 80,       // Pixels to offset from top when calculating position. Adjust if needed based on your navbar height.
//         });
//     }

//     // Collapse responsive navbar when a nav link is clicked (for mobile view)
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             // Check if the toggler button is visible (mobile view)
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click(); // Simulate a click on the toggler to close the menu
//             }
//         });
//     });

//     // Optional: Add immediate highlight on click (ScrollSpy should handle this, but this gives instant feedback)
//     const navLinks = document.querySelectorAll('#mainNav .nav-link'); // Target links within #mainNav
//     navLinks.forEach(link => {
//         // Ensure the link actually points to a section on the page
//         if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
//              link.addEventListener('click', function () {
//                  // Remove active class from all nav links within the main nav
//                  navLinks.forEach(l => l.classList.remove('active'));
//                  // Add active class to the clicked link
//                  this.classList.add('active');
//              });
//         }
//     });

// });