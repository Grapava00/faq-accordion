document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll("article section h2");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentSection = header.parentElement;
    });
  });
});
