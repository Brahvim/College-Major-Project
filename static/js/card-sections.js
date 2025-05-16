let g_sectCount = 0;
const g_btnPrint = document.getElementById("print-btn");
const g_templateSect = document.getElementById("section");
const g_btnSectAdd = document.getElementById("add-section-btn");

// This layout looks great with `<textarea>`s :)!
g_btnPrint.addEventListener("click", () => window.print());

g_btnSectAdd.addEventListener("click", () => {

	const resume = document.getElementById("resume");
	const newSection = document.createElement("div");

	newSection.className = "section";
	newSection.id = `extra-section-${g_sectCount}`;
	newSection.appendChild(g_templateSect.content.cloneNode(true)); // Clones `content` node, not the `<template>` node itself!

	++g_sectCount;
	resume.insertAdjacentElement("beforeend", newSection);
	newSection.querySelector(".remove-section-btn").addEventListener("click", () => resume.removeChild(newSection));

});
