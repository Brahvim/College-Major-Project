let g_sectCount = 0;
const g_btnPrint = document.getElementById("print-btn");
const g_templateSect = document.getElementById("section");
const g_btnSectAdd = document.getElementById("add-section-btn");

g_btnPrint.addEventListener("click", () => {

	const grabHeadings = () => [...document.getElementsByClassName("user-editable-h2")];
	const grabParagraphs = () => [...document.getElementsByClassName("user-editable-p")];

	grabHeadings().forEach(p_textArea => {

		const heading = document.createElement("h2");
		heading.innerHTML = p_textArea.value;
		heading.className = "user-editable-h2";
		p_textArea.replaceWith(heading);

	});

	grabParagraphs().forEach(p_textArea => {

		const paragraph = document.createElement("p");
		paragraph.innerHTML = p_textArea.value;
		paragraph.className = "user-editable-p";
		p_textArea.replaceWith(paragraph);

	});

	window.print();

	grabHeadings().forEach(p_heading => {

		const textArea = document.createElement("textarea");
		textArea.value = p_heading.innerHTML;
		textArea.className = "user-editable-h2";
		p_heading.replaceWith(textArea);

	});

	grabParagraphs().forEach(p_paragraph => {

		const textArea = document.createElement("textarea");
		textArea.value = p_paragraph.innerHTML;
		textArea.className = "user-editable-p";
		p_paragraph.replaceWith(textArea);

	});

});

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

g_btnSectAdd.click();
