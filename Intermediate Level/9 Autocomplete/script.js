const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

// Örnek kelime listesi
const words = [
    "JavaScript", "Java", "Python", "PHP", "Ruby", "React", "Redux", "Vue",
    "Angular", "Node.js", "Express", "CSS", "HTML", "C++", "C#", "Swift", "Kotlin"
];

searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase();
    suggestions.innerHTML = "";

    if (!input) return;

    const filtered = words.filter(word => word.toLowerCase().startsWith(input));

    filtered.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        li.addEventListener("click", () => {
            searchInput.value = word;
            suggestions.innerHTML = "";
        });
        suggestions.appendChild(li);
    });
});