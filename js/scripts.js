console.log("Arrow clicked!");
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.getElementById("arrow");
  const navbar = document.getElementById("navbar");

  arrow.addEventListener("click", function () {
    navbar.classList.toggle("active");
    arrow.style.backgroundColor = navbar.classList.contains("active")
      ? "rgba(0, 0, 0, 0.8)"
      : "#00b4cc";
  });
});
