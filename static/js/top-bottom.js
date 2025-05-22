let g_sectCount = 0;
const g_divResume = document.getElementById("resume");
const g_btnPrint = document.getElementById("print-btn");
const g_templateSect = document.getElementById("section");
const g_btnSectAdd = document.getElementById("add-section-btn");

g_btnPrint.addEventListener("click", () => {

	const grabHeadings = () => [...document.getElementsByClassName("user-editable-h2")];
	const grabParagraphs = () => [...document.getElementsByClassName("user-editable-p")];

	grabHeadings().forEach(p_textArea => {

		const heading = document.createElement("h2");
		heading.className = "user-editable-h2";
		heading.innerHTML = p_textArea.value;
		p_textArea.replaceWith(heading);

	});

	grabParagraphs().forEach(p_textArea => {

		const paragraph = document.createElement("p");
		paragraph.className = "user-editable-p";
		paragraph.innerHTML = p_textArea.value;
		p_textArea.replaceWith(paragraph);

	});

	window.print();

	grabHeadings().forEach(p_heading => {

		const textArea = document.createElement("textarea");
		textArea.className = "user-editable-h2";
		textArea.value = p_heading.innerHTML;
		p_heading.replaceWith(textArea);

	});

	grabParagraphs().forEach(p_paragraph => {

		const textArea = document.createElement("textarea");
		textArea.className = "user-editable-p";
		textArea.value = p_paragraph.innerHTML;
		p_paragraph.replaceWith(textArea);

	});

});

g_btnSectAdd.addEventListener("click", () => {

	const newSection = document.createElement("div");

	newSection.className = "section";
	newSection.id = `extra-section-${g_sectCount}`;
	newSection.appendChild(g_templateSect.content.cloneNode(true)); // Clones `content` node, not the `<template>` node itself!

	++g_sectCount;
	g_divResume.insertAdjacentElement("beforeend", newSection);
	newSection.querySelector(".remove-section-btn").addEventListener("click", () => g_divResume.removeChild(newSection));

});
