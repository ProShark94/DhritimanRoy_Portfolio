document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove 'active' class from all links
            navLinks.forEach((link) => link.classList.remove("active"));
  
            // Highlight the corresponding navbar link
            const activeLink = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );
  
    sections.forEach((section) => observer.observe(section));
  });