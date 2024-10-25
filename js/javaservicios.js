function toggleService(index) {
    const contents = document.querySelectorAll(".service-content");
    const icons = document.querySelectorAll(".toggle-icon");

    if (contents[index].classList.contains("active")) {
        contents[index].classList.remove("active");
        icons[index].textContent = "+";
    } else {
        contents.forEach((content, i) => {
            content.classList.remove("active");
            icons[i].textContent = "+";
        });
        contents[index].classList.add("active");
        icons[index].textContent = "-";
    }
}
