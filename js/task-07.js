const refs = {
	input: document.querySelector("#font-size-control"),
	text: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
	const eventValue = event.currentTarget.value;
	refs.text.style.fontSize = eventValue + "px";
}
