document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Sidebar Toggle
  const sidebar = document.getElementById("mySidebar");
  const navToggle = document.getElementById("navToggle");
  const navClose = document.getElementById("navClose");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  function openSidebar() {
    if (sidebar) sidebar.style.display = "block";
  }

  function closeSidebar() {
    if (sidebar) sidebar.style.display = "none";
  }

  if (navToggle) navToggle.addEventListener("click", openSidebar);
  if (navClose) navClose.addEventListener("click", closeSidebar);

  mobileNavItems.forEach((item) => {
    item.addEventListener("click", closeSidebar);
  });

  // Animated Skill Progress Bars (Triggers when scrolled into view)
  const skillSection = document.getElementById("skills");
  const progressFills = document.querySelectorAll(".progress-fill");
  let animated = false;

  function animateSkills() {
    if (!skillSection) return;
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !animated) {
      progressFills.forEach((fill) => {
        const targetWidth = fill.getAttribute("data-progress");
        fill.style.width = targetWidth;
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills();

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formSuccess.classList.remove("hidden");
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.add("hidden");
      }, 5000);
    });
  }
});