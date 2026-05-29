
// Waits for everything to be loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel_logo a").forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

    // This is for my dropdowns
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

    // This is for my image slider, to switch between the different knife colors and views
    const imageSets = {
        black: [
            "render/knife_black_Camera 1.jpg",
            "render/knife_black_Camera 2.jpg",
            "render/knife_black_Camera 3.jpg"
        ],
        oak: [
            "render/knife_oak_Camera 1.jpg",
            "render/knife_oak_Camera 2.jpg",
            "render/knife_oak_Camera 3.jpg"
        ],
        walnut: [
            "render/knife_walnut_Camera 1.jpg",
            "render/knife_walnut_Camera 2.jpg",
            "render/knife_walnut_Camera 3.jpg"
        ]
    };

    const colorButtons = document.querySelectorAll(".color-option");
    let img_slideIndex = 0;
    let currentColor = "black";

    // Updates slideshow images and displays the currently active slide
    function updateSlides() {
        const slides = document.querySelectorAll(".img_slides img");
        if (!slides.length) return;

        slides.forEach((slide, index) => {
            slide.src = imageSets[currentColor][index];
            slide.alt = `${currentColor.charAt(0).toUpperCase() + currentColor.slice(1)} knife view ${index + 1}`;
        });

        slides.forEach((slide) => slide.classList.remove("displaySlide"));
        slides[img_slideIndex].classList.add("displaySlide");
    }

    // Changes the visible slide and keeps slideshow looping correctly
    function showSlide(index) {
        const slides = document.querySelectorAll(".img_slides img");
        if (!slides.length) return;
        img_slideIndex = (index + slides.length) % slides.length;
        updateSlides();
    }

    // Changes the selected knife color and updates active button styling
    function setColor(color) {
        currentColor = color;
        colorButtons.forEach((button) => {
            button.classList.toggle("active", button.dataset.color === color);
        });
        updateSlides();
    }

    colorButtons.forEach((button) => {
        button.addEventListener("click", () => setColor(button.dataset.color));
    });

    // Functions for next and previous slideshow buttons
    window.nextSlide = () => showSlide(img_slideIndex + 1);
    window.prevSlide = () => showSlide(img_slideIndex - 1);
    setColor("black");
});