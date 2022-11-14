function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	body: document.querySelector("body"),
	nameColor: document.querySelector(".color"),
	changeBtn: document.querySelector(".change-color"),
};

refs.changeBtn.addEventListener("click", () => {
	const color = getRandomHexColor();
	refs.nameColor.textContent = color;
	refs.body.style.backgroundColor = color;
});
