document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".team-card, .resource-item");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 200);
    });
});
