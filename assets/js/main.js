// Shared interactions for the IK Clothing demo site.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const productCards = document.querySelectorAll(".collection-grid [data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      productCards.forEach((card) => {
        card.hidden = selected !== "all" && card.dataset.category !== selected;
      });
    });
  });

  const newsletterForm = document.querySelector("#newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.querySelector("#newsletter-message");
      message.textContent = "Thanks! This demo form is not connected to an email service yet.";
      newsletterForm.reset();
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const text =
        `Hello IK Clothing!\n\n` +
        `Name: ${formData.get("name")}\n` +
        `Email: ${formData.get("email")}\n` +
        `Enquiry: ${formData.get("topic")}\n\n` +
        `${formData.get("message")}\n\n` +
        `I found you through your website.`;
      const whatsappUrl = `https://wa.me/919487229487?text=${encodeURIComponent(text)}`;
      const message = document.querySelector("#contact-message");
      message.textContent = "Opening WhatsApp with your enquiry ready to send. Press Send in WhatsApp to message IK Clothing.";
      window.location.href = whatsappUrl;
    });
  }
});