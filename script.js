// Show a message when the page loads
console.log("Welcome to my accessible portfolio!");

// Highlight the current page link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelector("#form-status").textContent =
      "Thank you! Your practice form was submitted successfully.";
     });
}