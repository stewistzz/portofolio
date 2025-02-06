document.addEventListener("DOMContentLoaded", function () {
    let contentSection = document.getElementById("contentSection");
    let offsetTop = contentSection.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY > offsetTop) {
            contentSection.classList.add("sticky");
        } else {
            contentSection.classList.remove("sticky");
        }
    });
});
