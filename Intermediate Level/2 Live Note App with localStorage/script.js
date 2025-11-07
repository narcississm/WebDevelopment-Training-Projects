const textarea = document.getElementById("noteArea");
const status = document.querySelector(".status");

// localStorage'dan veriyi yükle
textarea.value = localStorage.getItem("liveNote") || "";

// input'a her yazıldığında localStorage'a kaydet
textarea.addEventListener("input", () => {
    localStorage.setItem("liveNote", textarea.value);
    status.style.display = "block";
    setTimeout(() => {
        status.style.display = "none";
    }, 1000);
});