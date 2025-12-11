document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    const panel = header.nextElementSibling;

    header.addEventListener("click", () => {
      const isOpen = header.getAttribute("aria-expanded") === "true";

      // Close all other accordion sections
      headers.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
          const otherPanel = otherHeader.nextElementSibling;
          otherPanel.style.maxHeight = null;
          otherPanel.classList.remove("open");
        }
      });

      // Toggle current section
      header.setAttribute("aria-expanded", String(!isOpen));

      if (!isOpen) {
        panel.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.classList.remove("open");
        panel.style.maxHeight = null;
      }
    });
  });
});
