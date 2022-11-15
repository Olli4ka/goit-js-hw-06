const counter = document.querySelector("#value");
let counterValue = 0;
counter.textContent = `${counterValue}`;
console.log(counterValue);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
decrementBtn.addEventListener("click", () => {
	counterValue -= 1;
	counter.textContent = `${counterValue}`;
	console.log(counterValue);
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);
incrementBtn.addEventListener("click", () => {
	counterValue += 1;
	counter.textContent = `${counterValue}`;
	console.log(counterValue);
});
