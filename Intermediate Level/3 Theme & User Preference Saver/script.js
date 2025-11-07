const toggleBtn = document.getElementById("toggleTheme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.body.classList.add(currentTheme);
} else {
    document.body.classList.add("light-theme");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
});