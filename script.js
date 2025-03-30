document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.boxShadow = "0 0 10px 3px #4caf50";
        });

        link.addEventListener("mouseout", () => {
            link.style.boxShadow = "none";
        });
    });
});
