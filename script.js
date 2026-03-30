// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// TOOLTIP
const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".point").forEach(point => {

    point.addEventListener("mouseenter", () => {
        tooltip.innerText = point.dataset.text;
        tooltip.style.display = "block";
    });

    point.addEventListener("mousemove", (e) => {
        tooltip.style.top = e.pageY + "px";
        tooltip.style.left = e.pageX + "px";
    });

    point.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

});