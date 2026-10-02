// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


// Contact Form

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    form.reset();

});


// Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});