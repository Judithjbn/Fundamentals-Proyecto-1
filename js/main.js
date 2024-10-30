const hamburger = document.querySelector(".navbar__hamburger");
const navLinks = document.querySelector(".navbar__links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }
});

const colorDots = document.querySelectorAll(".color-dot");
colorDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        colorDots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
    });
});
