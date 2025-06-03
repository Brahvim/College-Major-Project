let g_sectCount = 0;
const g_templateSect = document.getElementById("section");

// This layout looks great with `<textarea>`s :)!
g_btnPrint.addEventListener("click", () => window.print());

g_btnSectAdd.addEventListener("click", () => {

	const newSection = document.createElement("div");

	newSection.className = "section";
	newSection.id = `extra-section-${g_sectCount}`;
	newSection.appendChild(g_templateSect.content.cloneNode(true)); // Clones `content` node, not the `<template>` node itself!
	newSection.querySelectorAll("textarea").forEach(textareaMakeResizable);

	g_sectCount++;
	g_divResume.insertAdjacentElement("beforeend", newSection);
	newSection.querySelector(".remove-section-btn").addEventListener("click", () => g_divResume.removeChild(newSection));

});
