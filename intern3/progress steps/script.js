const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".step");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentActive = 2; // First 2 steps already completed like in image

update();

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > steps.length) {
        currentActive = steps.length;
    }
    update();
});

prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    steps.forEach((step, index) => {
        if (index < currentActive) {
            step.classList.add("active");
            if (index < 2) {
                step.querySelector(".circle").innerHTML = "✔";
            }
        } else {
            step.classList.remove("active");
            step.querySelector(".circle").innerHTML = index + 1;
        }
    });

    const progressPercent = ((currentActive - 1) / (steps.length - 1)) * 100;
    progress.style.width = progressPercent + "%";

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === steps.length;
}
