function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        toggleMenu();
    });
});
