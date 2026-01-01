// Simple fade-in effect for hero text
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content"); // ✅ correct selector
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(20px)";

        setTimeout(() => {
            hero.style.transition = "all 0.8s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 200);
    }
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
