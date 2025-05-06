document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".join").addEventListener("click", function () {
        // Redirect to join page
        window.location.href = "join.html";
    });

    document.querySelector(".login").addEventListener("click", function () {
        // Redirect to login page
        window.location.href = "login.html";
    });

    document.querySelector(".get-started").addEventListener("click", function () {
        // Redirect to resume form or builder
        window.location.href = "resume-form.html"; // make sure this file exists
    });

    document.querySelector(".learn-more").addEventListener("click", function () {
        alert("Learn more about our resume builder!");
    });

    document.querySelector(".start").addEventListener("click", function () {
        alert("Let's start building your resume!");
    });

    document.querySelector(".explore").addEventListener("click", function () {
        alert("Explore more features!");
    });
});
