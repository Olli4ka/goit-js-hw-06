const refs = {
	input: document.querySelector("#name-input"),
	nameMessage: document.querySelector("#name-output"),
};

refs.nameMessage.textContent = "Anonymous";

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
	refs.nameMessage.textContent = event.currentTarget.value;
}
