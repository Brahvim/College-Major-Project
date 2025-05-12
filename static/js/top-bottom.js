let g_sectCount = 0;

const btn = document.getElementById("add-section-btn");

btn.addEventListener("click", () => {

	const resume = document.getElementById("resume");
	const newSection = document.createElement("div");
	const btnContainer = document.getElementById("section-manager-container");

	newSection.className = "section";
	newSection.innerHTML = `
<div id="extra-section-${g_sectCount}" style="columns: 2;">
	<h2 contenteditable="true"># New Section</h2>
	<button class="remove-section-btn">x</button>
</div>
<p contenteditable="true">Start writing here...</p>
`;

	++g_sectCount;
	resume.insertBefore(newSection, btnContainer);
	newSection.querySelector(".remove-section-btn").addEventListener("click", () => resume.removeChild(newSection));

});
