document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll("article section h2");
  console.log(accordionHeaders);
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentSection = header.parentElement;
      const isActive = currentSection.classList.contains("active");

      if (!isActive) {
        currentSection.classList.add("active");
      } else {
        currentSection.classList.remove("active");
      }
    });
  });
});
