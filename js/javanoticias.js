function toggleNews(index) {
    const details = document.getElementById(`news-details-${index}`);
    const isDisplayed = details.style.display === "block";

    if (isDisplayed) {
        details.style.display = "none";
    } else {
        details.style.display = "block";
        details.style.animation = "fadeIn 0.5s ease";
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
