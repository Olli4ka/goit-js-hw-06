const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");

const makeIngradientList = (array) => {
	return array.map((item) => {
		const ingredient = document.createElement("li");
		ingredient.classList.add("item");
		ingredient.textContent = item;
		return ingredient;
	});
};
const elements = makeIngradientList(ingredients);
console.log(ingredients);
list.append(...elements);
