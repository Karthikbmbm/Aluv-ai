const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach(section => {
    observer.observe(section);
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        // Close other items (optional - smooth singular open)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        // Toggle current
        item.classList.toggle("active");
    });
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav nav");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        // Optional: Toggle icon between ☰ and ✕
        if (navMenu.classList.contains("active")) {
            hamburger.textContent = "✕";
        } else {
            hamburger.textContent = "☰";
        }
    });
}
