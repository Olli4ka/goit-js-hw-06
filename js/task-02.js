const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");

const res = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
list.insertAdjacentHTML("beforeend", res);
