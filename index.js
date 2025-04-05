document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll("article section h2");
  const accordionSections = document.querySelectorAll("article section");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentSection = header.parentElement;
      const isActive = currentSection.classList.contains("active");

      accordionSections.forEach((section) => {
        section.classList.remove("active");
      });

      if (!isActive) {
        currentSection.classList.add("active");
      }
    });
  });
});
