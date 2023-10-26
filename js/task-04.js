const counter = document.getElementById("counter");
const value = document.getElementById("value");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
let counterValue = 0;

function updateCouter() {
  value.textContent = counterValue;
}

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCouter();
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCouter();
});
