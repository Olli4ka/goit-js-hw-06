const form = document.querySelector(".login-form");

form.addEventListener("submit", onLogin);

function onLogin(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	const formData = { email, password };

	if (!email || !password) {
		alert("all fields must be filled");
	} else {
		console.log(formData);
		form.reset();
	}
}
