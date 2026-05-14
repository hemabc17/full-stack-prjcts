function getStarted() {
    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address!");
    } else {
        alert("Welcome to Netflix, " + email);
    }
}
