const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");
    const button = form.querySelector(".animated-button");
    const overlay = document.querySelector(".overlay");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting immediately

        button.classList.add("clicked");
        overlay.classList.add("active");

        // Wait for the animation to complete before redirecting
        setTimeout(function () {
            window.location.href = "form.html";
        }, 500); // Match the duration of the animation
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const speed = +counter.getAttribute('data-speed') || 400; // Kecepatan animasi default

        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});