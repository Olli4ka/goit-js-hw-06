const list = document.querySelector("#categories");
console.log("Number of categories:", list.children.length);

const categories = document.querySelectorAll("h2");
for (let category of categories) {
	console.log("Category: ", category.textContent);
	console.log("Elements: ", category.nextElementSibling.children.length);
}
