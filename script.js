function button1() {
    window.location.href = "store.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            document.querySelectorAll(".content").forEach(c => {
                if (c !== content) {
                    c.classList.remove("open");
                }
            });
            content.classList.toggle("open");
        });
    });
});