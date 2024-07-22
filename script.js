document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

document
  .querySelector(".call-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
    if (confirm("Czy chcesz zadzwonić?")) {
      window.location.href = "tel:+48123456789"; // Zamień na właściwy numer telefonu
    }
  });

document
  .querySelector(".sms-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
    if (confirm("Czy chcesz wysłać SMS?")) {
      window.location.href = "sms:+48123456789?body=Treść%20SMS"; // Zamień na właściwy numer telefonu i treść wiadomości
    }
  });
