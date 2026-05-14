const ratings = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const card = document.getElementById("card");

let selectedRating = "Neutral";

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        ratings.forEach(r => r.classList.remove("active"));
        rating.classList.add("active");
        selectedRating = rating.innerText;
    });
});

sendBtn.addEventListener("click", () => {
    card.innerHTML = `
        <h2>Thank You!</h2>
        <p>Feedback: <strong>${selectedRating}</strong></p>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
});