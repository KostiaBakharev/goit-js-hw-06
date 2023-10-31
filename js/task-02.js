const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  // ingredientsList.append(li);
  ingredientsList.insertAdjacentElement("beforeend", li);
});

//2

// const liElements = ingredients.map(
//   (ingredient) => `<li class="item">${ingredient}</li>`
// );
// ingredientsList.insertAdjacentHTML("beforeend", liElements.join(""));
