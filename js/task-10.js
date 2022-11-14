function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	input: document.querySelector("input"),
	createBtn: document.querySelector("button[data-create]"),
	destroyBtn: document.querySelector("button[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};
console.log(refs.input);
console.log(refs.createBtn);
console.log(refs.destroyBtn);
console.log(refs.boxes);

const amount = refs.input.value;
console.log(amount);

refs.createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
	let boxesArrey = [];

	const color = getRandomHexColor();

	for (let i = 0; i < amount; i += 1) {
		const newBoxes = document.createElement("div");
		newBoxes.style.width += "10px";
		newBoxes.style.height += "10px";
		newBoxes.style.backgroundColor = color;
		boxesArrey.push(i);
	}
	return boxesArrey;
}
