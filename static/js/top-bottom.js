let g_sectCount = 0;
const btnPrint = document.getElementById("print-btn");
const btnSectAdd = document.getElementById("add-section-btn");

btnPrint.addEventListener("click", () => {
	[...document.getElementsByClassName("user-editable-h2")].forEach(p_textArea => {

		console.log(p_textArea);
		const heading = document.createElement("h2");

		heading.className = "user-editable-h2";
		heading.innerHTML = p_textArea.innerHTML;
		p_textArea.parentNode.replaceChild(heading, p_textArea);

	});

	[...document.getElementsByClassName("user-editable-p")].forEach(p_textArea => {

		const paragraph = document.createElement("p");

		paragraph.className = "user-editable-p";
		paragraph.innerHTML = p_textArea.innerHTML;
		p_textArea.parentNode.replaceChild(paragraph, p_textArea);

	});

	window.print();

	[...document.getElementsByClassName("user-editable-h2")].forEach(p_heading => {

		const textArea = document.createElement("textarea");
		console.log(textArea);

		textArea.className = "user-editable-h2";
		textArea.innerHTML = p_heading.innerHTML;
		p_heading.parentNode.replaceChild(textArea, p_heading);

	});

	[...document.getElementsByClassName("user-editable-p")].forEach(p_paragraph => {

		const textArea = document.createElement("textarea");

		console.log(textArea);
		textArea.className = "user-editable-p";
		textArea.innerHTML = p_paragraph.innerHTML;
		p_paragraph.parentNode.replaceChild(textArea, p_paragraph);

	});

});

btnSectAdd.addEventListener("click", () => {

	const resume = document.getElementById("resume");
	const newSection = document.createElement("div");

	newSection.className = "section";
	newSection.innerHTML = `
<div id="extra-section-${g_sectCount}" style="columns: 2;">
	<h2><textarea class="user-editable-h2"># New Section</textarea></h2>
	<button class="remove-section-btn">x</button>
</div>
<p><textarea class="user-editable-p">Start writing here...</textarea></p>
`;

	++g_sectCount;
	resume.insertAdjacentElement("beforeend", newSection);
	newSection.querySelector(".remove-section-btn").addEventListener("click", () => resume.removeChild(newSection));

});
