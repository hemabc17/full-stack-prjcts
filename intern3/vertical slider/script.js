const textSlider = document.getElementById("textSlider");
const imageSlider = document.getElementById("imageSlider");

const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    // Text moves UP
    textSlider.style.transform = `translateY(-${currentIndex * 100}vh)`;

    // Image moves DOWN (opposite)
    imageSlider.style.transform = `translateY(${(currentIndex - (totalSlides - 1)) * 100}vh)`;
}

downBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
});

upBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});