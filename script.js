// ===== Change navbar color on scroll =====
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ===== Show current year in footer =====
let yearSpan = document.getElementById("year");
if (yearSpan) {
  let date = new Date();
  yearSpan.textContent = date.getFullYear();
}

// ===== Contact form simple validation =====
let contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
    } else {
      alert("Thank you, " + name + "! Your message has been sent.");
      contactForm.reset();
    }
  });
}

// ===== Simple dark/light theme toggle =====
let themeButton = document.getElementById("themeToggle");
if (themeButton) {
  themeButton.addEventListener("click", function () {
    // toggle dark class on whole page
    document.body.classList.toggle("dark-mode");

    // change button text
    if (document.body.classList.contains("dark-mode")) {
      themeButton.textContent = "Light";
    } else {
      themeButton.textContent = "Dark";
    }
  });
}
