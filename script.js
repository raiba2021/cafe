document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mode-toggle");
    const icon = toggleBtn.querySelector("i");

    // Load mode from localStorage
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.body.classList.toggle("dark", isDark);
    icon.className = isDark ? "ri-bard-line" : "ri-moon-clear-line";

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDarkNow = document.body.classList.contains("dark");
        icon.className = isDarkNow ? "ri-bard-line" : "ri-moon-clear-line";
        localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    });
});