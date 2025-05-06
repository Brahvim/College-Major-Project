document.addEventListener("DOMContentLoaded", () => {
    const selectedTemplate = localStorage.getItem("selectedTemplate");
    const templateInfo = document.getElementById("template-info");

    if (selectedTemplate) {
        templateInfo.textContent = `Using: ${selectedTemplate.replace("template", "Template ")}.`;
    } else {
        templateInfo.textContent = "No template selected. Returning to template selection...";
        setTimeout(() => {
            window.location.href = "choose_template.html";
        }, 2000);
    }

    document.getElementById("resume-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Resume Generated! You can now preview or download it.");
        // You can redirect or generate resume here
    });
});
